const { createHash } = require('crypto');
const { parsePaymentRequest } = require('invoices');
const {
    intArg,
    objectType,
    stringArg,
    extendType,
    nonNull,
} = require('nexus');
const { BOLT_FUN_LIGHTNING_ADDRESS } = require('../helpers/consts');
const { prisma } = require('../prisma');
const { getPaymetRequestForItem, hexToUint8Array } = require('./helpers');



const Donation = objectType({
    name: 'Donation',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.int('amount');
        t.nonNull.date('createdAt');
        t.nonNull.string('payment_request');
        t.nonNull.string('payment_hash');
        t.nonNull.boolean('paid');

        t.field('by', {
            type: 'User',
            resolve: (parent) => {
                return prisma.donation.findUnique({ where: { id: parent.id } }).donor();
            }
        });
    }
})



const donateMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field('donate', {
            type: "Donation",
            args: {
                amount_in_sat: nonNull(intArg())
            },
            resolve: async (_, args) => {

                const { amount_in_sat } = args;
                const lightning_address = BOLT_FUN_LIGHTNING_ADDRESS;
                const pr = await getPaymetRequestForItem(lightning_address, args.amount_in_sat);
                const invoice = parsePaymentRequest({ request: pr });

                return prisma.donation.create({
                    data: {
                        amount: amount_in_sat,
                        payment_request: pr,
                        payment_hash: invoice.id,
                    }
                });
            }
        })
    }
})

const confirmDonateMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field('confirmDonation', {
            type: "Donation",
            args: {
                payment_request: nonNull(stringArg()),
                preimage: nonNull(stringArg())
            },
            resolve: async (_, args) => {
                const paymentHash = createHash("sha256")
                    .update(hexToUint8Array(args.preimage))
                    .digest("hex");
                // look for a vote for the payment request and the calculated payment hash
                const donation = await prisma.donation.findFirst({
                    where: {
                        payment_request: args.payment_request,
                        payment_hash: paymentHash,
                    },
                });

                // if we find a donation it means the preimage is correct and we update the donation and mark it as paid
                // can we write this nicer?
                if (donation) {

                    // return the current donation
                    return prisma.donation.update({
                        where: { id: donation.id },
                        data: {
                            paid: true,
                            preimage: args.preimage,
                        }
                    });
                } else {
                    throw new Error("Invalid preimage");
                }
            }
        })
    }
})


const DonationsStats = objectType({
    name: 'DonationsStats',
    definition(t) {
        t.nonNull.int("prizes");
        t.nonNull.int("touranments");
        t.nonNull.int("donations");
        t.nonNull.int("applications");
    },
})

const getDonationsStats = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field('getDonationsStats', {
            type: "DonationsStats",
            resolve() {
                return {
                    prizes: 2600,
                    touranments: 2,
                    donations: prisma.donation.aggregate({
                        _sum: {
                            amount: true
                        },
                        where: {
                            paid: true
                        }
                    }),
                    applications: prisma.project.count()
                }
            }
        })
    }
})



module.exports = {
    // Types 
    Donation,
    DonationsStats,
    // Queries
    donateMutation,
    confirmDonateMutation,
    getDonationsStats,
}