import { Project, ProjectCategory } from "src/utils/interfaces";


export let categories = [
    {
        "title": "Shock the Web ⚡️",
        "id": 11,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "⚡",
        "votes_sum": 0
    },
    {
        "title": "Finance",
        "id": 1,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "💸",
        "votes_sum": 452
    },
    {
        "title": "Gaming",
        "id": 4,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "🎮",
        "votes_sum": 15
    },
    {
        "title": "Media & News",
        "id": 7,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "🚨",
        "votes_sum": 250
    },
    {
        "title": "Shopping",
        "id": 8,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "🛒",
        "votes_sum": 35
    },
    {
        "title": "Misc / Other",
        "id": 9,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "🎁",
        "votes_sum": 345
    },
    {
        "title": "Art & Collectibles",
        "id": 3,
        "cover_image": "https://s3-alpha-sig.figma.com/img/6edc/d1e4/8683ae2aa5c60526b5eaaf40a201a08a?Expires=1649030400&Signature=TAO9e3rlHC1TD3AKWOcxZr0t9YZW~q5AOj5deqXDFPqHvtbsTbaJXjKDo5LLp~H6V0OvbAmP6G2ab~9qrQitnJYogcpXO-mTLlpnUmKU1aA-Ipp5jQIfUvCMLQEGm4dJmgqoDINae3AJCj7dUIqnQaT79oHsUTy1jIPaVPcHj0dnm1Gj2WO06E-bX-wcJ~7yIuqZ6VXXbYPehfTpoEybmMPFuWP0b7wO-LklHT~CQ3k9Zeg4Gd1xM63p7kGLyVJng1Zwz5XuZ9Yasv~eQpz5W~L5TUx8afw1TgdiA4RigdSq6tM9wskbpPnyN~AODDUkkrrbDUtppfOTKAWmAlEXBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "icon": "🎨",
        "votes_sum": 11
    },
    {
        "title": "Social",
        "id": 2,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "🎭",
        "votes_sum": 0
    },
    {
        "title": "Analytics",
        "id": 6,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "💹",
        "votes_sum": 0
    },
    {
        "title": "Wallet",
        "id": 5,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "💳",
        "votes_sum": 0
    },
    {
        "title": "Exchange",
        "id": 10,
        "cover_image": "https://via.placeholder.com/1920x850.png?text=Category+Cover+Image",
        "icon": "🔁",
        "votes_sum": 0
    }
] as ProjectCategory[]

export let projects = [
    {
        "id": 16,
        "title": "Alby",
        "description": "Alby is wallet for your browser to send and receive bitcoin over the Lightning Network and login to websites. It let's you connect your own Lightning wallet. ",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/alby_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/alby_thumbnail.png",
        "screenshots": [],
        "website": "https://getalby.com/",
        "lightning_address": "hello@getalby.com",
        "votes_count": 335,
        "category": {
            "id": 9,
            "title": "Misc / Other"
        }
    },
    {
        "id": 22,
        "title": "Geyser Fund",
        "description": "On Geyser fund you can explore live crowdfunding projects, fund them on Bitcoin’s Lightning Network, and keep track of the projects.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/geyser-fund_cover.png",
        "thumbnail_image": "https://user-images.githubusercontent.com/36778205/157433567-4b1e41db-23d4-4a80-b48f-ee248ee87f1e.jpg",
        "screenshots": [],
        "website": "https://geyser.fund/",
        "lightning_address": "divineorgan67@walletofsatoshi.com",
        "votes_count": 232,
        "category": {
            "id": 1,
            "title": "Finance"
        }
    },
    {
        "id": 1,
        "title": "Kollider",
        "description": "The first real-time settled derivative exchange",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/kollider_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/kollider_thumbnail.png",
        "screenshots": [
            "https://t18307877.p.clickup-attachments.com/t18307877/87f5f10f-f462-4ec7-a0e7-65ac43f39d97/Screenshot%202022-03-01%20at%2023.34.23.png?view=open",
            "https://t18307877.p.clickup-attachments.com/t18307877/7a17965b-30d3-473a-85ee-f7a1698f44e4/Screenshot%202022-03-01%20at%2023.35.06.png?view=open",
            "https://t18307877.p.clickup-attachments.com/t18307877/8f75cdbb-de05-49c5-8f3c-4fcb260a49bf/Screenshot%202022-03-01%20at%2023.36.19.png?view=open"
        ],
        "website": "https://kollider.xyz/",
        "lightning_address": "johns@getalby.com",
        "votes_count": 220,
        "category": {
            "id": 1,
            "title": "Finance"
        }
    },
    {
        "id": 20,
        "title": "Lightning.Video",
        "description": "Lightning.Video allows to paywall videos and receive payments for comments, subscriptions and tips.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-video_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-video_thumbnail.png",
        "screenshots": [],
        "website": "https://lightning.video/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 205,
        "category": {
            "id": 7,
            "title": "Media & News"
        }
    },
    {
        "id": 7,
        "title": "Wavlake",
        "description": "Wavlake directly connects artists and listeners on an open-source payment platform powered by Bitcoin & Lightning.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/wavlake_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/wavlake_thumbnail.png",
        "screenshots": [],
        "website": "https://www.wavlake.com/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 45,
        "category": {
            "id": 7,
            "title": "Media & News"
        }
    },
    {
        "id": 12,
        "title": "Bitrefill",
        "description": "Bitrefill lets you buy vouchers, refill your phone, pay your bills and purchase incoming capacity for your Lightning node.",
        "cover_image": "http://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/bitrefill_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/bitrefill_thumbnail.png",
        "screenshots": [],
        "website": "https://www.bitrefill.com/buy",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 25,
        "category": {
            "id": 8,
            "title": "Shopping"
        }
    },
    {
        "id": 3,
        "title": "Sparkshot",
        "description": " Sparkshot is an art hosting platform that requires users to reveal the art by purchasing pixels in groups of one or more. Each purchase reveals those pixels and more of the underlying art.\r\n\r\nOnce all pixels have been purchased the art is fully revealled and we unlock the ability for the art to be downloaded and made free to go and live a life of its own. The art's page will remain on Sparkshot with the comments and metadata provided by the patrons. ",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/sparkshot_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/sparkshot_thumbnail.png",
        "screenshots": [],
        "website": "https://sparkshot.io/",
        "lightning_address": "johns@getalby.com",
        "votes_count": 11,
        "category": {
            "id": 3,
            "title": "Art & Collectibles"
        }
    },
    {
        "id": 10,
        "title": "Lightning Roulette",
        "description": "Lightning Roulette is a website to win bitcoin by playing Roulette.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-roulette_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-roulette_thumbnail.png",
        "screenshots": [],
        "website": "https://lightning-roulette.com/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 10,
        "category": {
            "id": 4,
            "title": "Gaming"
        }
    },
    {
        "id": 15,
        "title": "lnshort.it",
        "description": "lnshort.it is a service to redirect URLs and generate QR codes using the Lightning Network for payments and logins.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lnshort-it_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lnshort-it_thumbnail.png",
        "screenshots": [],
        "website": "https://lnshort.it/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 10,
        "category": {
            "id": 9,
            "title": "Misc / Other"
        }
    },
    {
        "id": 17,
        "title": "Lightning Gifts",
        "description": "On Lightning Gifts you can create fee-less Bitcoin gift vouchers to share with friends, family, and your haters.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-gifts_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-gifts_thumbnail.png",
        "screenshots": [],
        "website": "https://lightning.gifts/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 10,
        "category": {
            "id": 8,
            "title": "Shopping"
        }
    },
    {
        "id": 5,
        "title": "LN Blackjack",
        "description": "LN Blackjack lets you play Blackjack and win bitcoin over the Lightning Network.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lnblackjack_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lnblackjack_thumbnail.png",
        "screenshots": [],
        "website": "https://www.lnblackjack.com/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 5,
        "category": {
            "id": 4,
            "title": "Gaming"
        }
    },
    {
        "id": 23,
        "title": "Bolt Boosters",
        "description": "I wanted to create a way to monetize any video instantly and for free. A creator is able to create a unique link tied to their LN address to share with friends & followers. The user is able to stream sats instantly and for free after signing in with their @getalby LN address. \r\n\r\nThe market potential for this type of app is endless!",
        "cover_image": "https://dl.airtable.com/.attachmentThumbnails/27474095d5fea78afdf385c30ed3f761/6b6d831a",
        "thumbnail_image": "https://dl.airtable.com/.attachmentThumbnails/27474095d5fea78afdf385c30ed3f761/6b6d831a",
        "screenshots": [
            "https://dl.airtable.com/.attachmentThumbnails/dadd6fe367f993137972415dd3ba5b6d/46dde8e2",
            "https://dl.airtable.com/.attachmentThumbnails/ad0410f4c8bf05073a8484d4eb7146ed/d0946f0a",
            "https://dl.airtable.com/.attachmentThumbnails/815c6a76bd1aa7b07d2b92d47cbc4a78/b352fc1b"
        ],
        "website": "https://satsbuster.herokuapp.com/",
        "lightning_address": "subirachs@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 11,
            "title": "Shock the Web ⚡️"
        }
    },
    {
        "id": 24,
        "title": "Sat Streamer",
        "description": "Interact with the audience of your livestream through Lightning donations.\r\n- Lightning Address compatible\r\n- Text-to-speech: comedy ensured by reading out the messages or questions from you audience.\r\n- Crowdsource gifs from your audience \r\n\r\nIf you want to test out the live application, please use the regtest server, do not make an account on the mainnet experimental lndhub instance.\r\n\r\nLive Youtube example: https://www.youtube.com/watch?v=zAY8od3Z_LA&t=6015s",
        "cover_image": "",
        "thumbnail_image": "https://dl.airtable.com/.attachmentThumbnails/fb4467e1e0a0a4baeaaed2a58cf9e2cd/e100876e",
        "screenshots": [
            "https://dl.airtable.com/.attachmentThumbnails/bbb72c8861bc8152bb1400b0ca0e4c5a/742bd6f6"
        ],
        "website": "https://satstreamer.vercel.app",
        "lightning_address": "kiwiidb@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 11,
            "title": "Shock the Web ⚡️"
        }
    },
    {
        "id": 25,
        "title": "The Lightning tip gallery",
        "description": "The Lightning tip gallery\r\nsend a stranger a tip. get your tip request listed here\r\n\r\nhttps://github.com/Zrce/tipwall-backend\r\nhttps://github.com/Zrce/tipwall-frontend",
        "cover_image": "https://dl.airtable.com/.attachmentThumbnails/2529b036b046446c1502ee110598b5da/bbecacbc",
        "thumbnail_image": "https://dl.airtable.com/.attachmentThumbnails/dbc9138739627cbe0598063c0d235f18/d7b0c9c2",
        "screenshots": [
            "https://dl.airtable.com/.attachmentThumbnails/51d39bf8493a38cff3de85de6e6a47e0/9a1f5b74",
            "https://dl.airtable.com/.attachmentThumbnails/eb55a5a85d21d6c2ddcfe0895baf413b/2e5971a3"
        ],
        "website": "https://github.com/Zrce/tipwall-frontend",
        "lightning_address": "tobitcoin@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 11,
            "title": "Shock the Web ⚡️"
        }
    },
    {
        "id": 26,
        "title": "Arion",
        "description": "A fast, easy, bitcoin powered parking app that's on the user's side. Users can get on their way quicker, cities enforce parking easier, and local businesses benefit.",
        "cover_image": "https://dl.airtable.com/.attachmentThumbnails/4a63e4bf9523de039fcca7bbb5d39b38/b799bb27",
        "thumbnail_image": "https://dl.airtable.com/.attachmentThumbnails/4a63e4bf9523de039fcca7bbb5d39b38/b799bb27",
        "screenshots": [
            "https://dl.airtable.com/.attachmentThumbnails/640706bbf4fe82f554e47313dcffdb03/fd421db7",
            "https://dl.airtable.com/.attachmentThumbnails/ee696150c36ab7625582b768c4ee023f/7eba66f5",
            "https://dl.airtable.com/.attachmentThumbnails/36d5e53432f94e8ba50649b5fc875b0f/7da5dc98",
            "https://dl.airtable.com/.attachmentThumbnails/c56a91e4b77d51bd8ab283296e73bc7c/83c550f2",
            "https://dl.airtable.com/.attachmentThumbnails/72b3e88b2bb67586f4616fbdc76574f7/ab159627",
            "https://dl.airtable.com/.attachmentThumbnails/d2a02c77483cbe2679b3e35b78a216df/ca05ec1c",
            "https://dl.airtable.com/.attachmentThumbnails/077493b1d9397bca8a3daa993e880529/6187ca63",
            "https://dl.airtable.com/.attachmentThumbnails/ea1f5386080334b95965b09d33cdc03f/d47eda7f",
            "https://dl.airtable.com/.attachmentThumbnails/9f22802092bb26522ea1c7ae889b82f4/ae0de49b"
        ],
        "website": "https://arionparking.tech/",
        "lightning_address": "atlantabitdevs@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 11,
            "title": "Shock the Web ⚡️"
        }
    },
    {
        "id": 27,
        "title": "⚡ Payment Widgets",
        "description": "Payment widgets make integrating ⚡ payments into your website a breeze. \r\n\r\n1. Go to https://webln.twentyuno.net/widget\r\n2. Fill in the form\r\n3. Generate embed code\r\n4. Embed the code into your website and start receiving payments today\r\n\r\nThis is how that would look on your website:\r\nhttps://codepen.io/reneaaron/full/VwybrvO \r\n\r\nThe widget supports WebLN but also provides fallback options (QR, Invoice) where WebLN is not available.",
        "cover_image": "",
        "thumbnail_image": "https://dl.airtable.com/.attachmentThumbnails/34984c4a4e366373c3410887fab001ba/f1121463",
        "screenshots": [
            "https://dl.airtable.com/.attachmentThumbnails/73b6da7fb9802bf8aa4bdd212e4b1cbe/ebc0a61a"
        ],
        "website": "https://webln.twentyuno.net/widget",
        "lightning_address": "reneaaron@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 11,
            "title": "Shock the Web ⚡️"
        }
    },
    {
        "id": 28,
        "title": "LNShop",
        "description": "LNShop aims to provide a one-click, lightweight, e-commerce solution for the lightning network.\r\n\r\nWe built it from the ground up to be easy to setup as a static website that can allow free hosting and little to no maintenance.\r\n\r\nI supports easy setup where the client only needs to Create a spreadsheet of their inventory and provide a lighting address and have their shop up and running in as little as 15 minutes.\r\n\r\nhttps://www.figma.com/proto/6BWuYddHvFySbdikxll9tj/Ln-shop-Presentation?node-id=1010%3A2200&scaling=min-zoom&page-id=801%3A6671&starting-point-node-id=1009%3A1337\r\n\r\nhttps://www.loom.com/share/8b608dc58a6d489ab8f541641060111b",
        "cover_image": "",
        "thumbnail_image": "https://dl.airtable.com/.attachmentThumbnails/b98eae93eaca66e2e006eab594a4c8d8/3f981698",
        "screenshots": [
            "https://dl.airtable.com/.attachmentThumbnails/a681f9f056ac0bc29ab39730d2db9bda/2279dcb8",
            "https://dl.airtable.com/.attachmentThumbnails/bcbe86a0096e384a54900c0e04f89448/d6341045",
            "https://dl.airtable.com/.attachmentThumbnails/e90632192df8d5b6d9dea9dc8cd80c51/e59c749a",
            "https://dl.airtable.com/.attachmentThumbnails/bfffa80f1a76cfdfaaa29b5e44346f2b/57eccaf6",
            "https://dl.airtable.com/.attachmentThumbnails/0e0881d4f0d3459cbbf270c760ca3e94/088f4023",
            "https://dl.airtable.com/.attachmentThumbnails/f6ab4891cbe033fea641e34f2f05853f/1fb9d921"
        ],
        "website": "https://lnshop.github.io/lnshop/",
        "lightning_address": "alivesession77@walletofsatoshi.com",
        "votes_count": 0,
        "category": {
            "id": 11,
            "title": "Shock the Web ⚡️"
        }
    },
    {
        "id": 2,
        "title": "LN Markets",
        "description": "LN Markets is a new type of Bitcoin derivatives trading platform, one that can only be accessed via the Lightning Network, a payment protocol running on top of Bitcoin.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lnmarkets_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lnmarkets_thumbnail.png",
        "screenshots": [],
        "website": "https://lnmarkets.com/",
        "lightning_address": "johns@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 1,
            "title": "Finance"
        }
    },
    {
        "id": 29,
        "title": "Geyser Grants",
        "description": "Geyser Grants makes it easy for anyone to contribute to a cause without having to look into every crowdfunding campaign. The Geyser Fund Board will search within and beyond Geyserfund campaigns to distribute them to the most relevant and impactful projects.\r\n\r\nhttps://www.loom.com/share/6442574f45344345abf0b5ae303b35a3",
        "cover_image": "",
        "thumbnail_image": "https://dl.airtable.com/.attachmentThumbnails/f62e158661995a11b6119e8ff4cc4ac2/fe0219e9",
        "screenshots": [
            "https://dl.airtable.com/.attachmentThumbnails/3e2d4e49d8aa7d6fb62c5a278b7bff68/249829a6",
            "https://dl.airtable.com/.attachmentThumbnails/7540606967a04f51637731c0c6eb29c0/1abf8a61",
            "https://dl.airtable.com/.attachmentThumbnails/f7cfff3ea2d125ebfa3ce9a1ac49df00/d7253e98",
            "https://dl.airtable.com/.attachmentThumbnails/39492c2dabe7ebc78d62617cfd41103d/ae42cc14",
            "https://dl.airtable.com/.attachmentThumbnails/7e86771958c7c5949bdbaa54545b341c/a7dd3e02"
        ],
        "website": "https://geyser.fund",
        "lightning_address": "divineorgan67@walletofsatoshi.com",
        "votes_count": 0,
        "category": {
            "id": 11,
            "title": "Shock the Web ⚡️"
        }
    },
    {
        "id": 8,
        "title": "LOFT",
        "description": "LOFT allows you to trade investment products with bitcoin and uses the Lightning Network for a seamless user experience.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/loft-trade_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/loft-trade_thumbnail.png",
        "screenshots": [],
        "website": "https://loft.trade/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 1,
            "title": "Finance"
        }
    },
    {
        "id": 14,
        "title": "Sats 4 Likes",
        "description": "Sats 4 Likes allows you to provide rewards for various tasks such as Twitter likes and followers or app reviews.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/sats-4-likes-cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/sats-4-likes_thumbnail.png",
        "screenshots": [],
        "website": "https://kriptode.com/satsforlikes/index.html",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 9,
            "title": "Misc / Other"
        }
    },
    {
        "id": 18,
        "title": "Scarce City",
        "description": "Scarce City is an auction marketplace for art. Bidders collateralize their bids with minimal fee lightning payments.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/scarce-city_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/scarce-city_thumbnail.png",
        "screenshots": [],
        "website": "https://scarce.city/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 3,
            "title": "Art & Collectibles"
        }
    },
    {
        "id": 11,
        "title": "Stacker News",
        "description": "Stacker News is a crowd-sourced news aggregator with a Reddit-style voting mechanism using bitcoin.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/stacker-news_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/stacker-news_thumbnail.png",
        "screenshots": [],
        "website": "https://stacker.news/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 7,
            "title": "Media & News"
        }
    },
    {
        "id": 21,
        "title": "Starbackr",
        "description": "Starbackr's plattform allows to post, follow, like, comment and support your favorite creators",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/starbackr_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/starbackr_thumbail.png",
        "screenshots": [],
        "website": "https://www.starbackr.com/",
        "lightning_address": "moritz@geralby.com",
        "votes_count": 0,
        "category": {
            "id": 7,
            "title": "Media & News"
        }
    },
    {
        "id": 4,
        "title": "Amboss Space",
        "description": "Amboss Space is a Lightning Network Explorer leveraging the Lightning Network for secure and seamless logins.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/amboss-space_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/amboss-space_thumbnail.png",
        "screenshots": [],
        "website": "https://amboss.space/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 6,
            "title": "Analytics"
        }
    },
    {
        "id": 19,
        "title": "Y'alls ",
        "description": "Visitors on Y'alls can read and write articles with Lightning Network micropayments.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/yalls_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/yalls_thumbnail.png",
        "screenshots": [],
        "website": "https://yalls.org/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 2,
            "title": "Social"
        }
    },
    {
        "id": 13,
        "title": "Lightning Network Stores",
        "description": "Lightning Network Stores provides a collection of stores and websites accepting Bitcoin payments over the Lightning Network.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-network-stores_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-network-stores_thumbnail.png",
        "screenshots": [],
        "website": "https://lightningnetworkstores.com/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 8,
            "title": "Shopping"
        }
    },
    {
        "id": 9,
        "title": "Lightning Poker",
        "description": "Lightning Poker is platform to play poker games with bitcoin over the Lightning Network.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-poker_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lightning-poker_thumbnail.png",
        "screenshots": [],
        "website": "https://lightning-poker.com/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 4,
            "title": "Gaming"
        }
    },
    {
        "id": 6,
        "title": "LNGames",
        "description": "LNGames is platform with several provably fair simple games integrating payments over the Lightning Network.",
        "cover_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lngames_cover.png",
        "thumbnail_image": "https://fra1.digitaloceanspaces.com/alby-storage/makers-bolt-fun/bolt.fund_thumbnails_covers/lngames_thumbnail.png",
        "screenshots": [],
        "website": "https://lngames.net/",
        "lightning_address": "moritz@getalby.com",
        "votes_count": 0,
        "category": {
            "id": 4,
            "title": "Gaming"
        }
    }
] as Project[]


categories = categories.map(c => ({ ...c, __typename: "Category" }))
projects = projects.map(p => ({ ...p, __typename: "Project" }))

// 2- Computed Fields
categories = categories.map(c => ({ ...c, apps_count: projects.reduce((acc, p) => acc + (p.category.id === c.id ? 1 : 0), 0) }))

