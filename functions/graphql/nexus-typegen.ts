/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Award: { // root type
    id: number; // Int!
    image: string; // String!
    title: string; // String!
    url: string; // String!
  }
  Bounty: { // root type
    applicants_count: number; // Int!
    author: NexusGenRootTypes['User']; // User!
    cover_image: string; // String!
    date: string; // String!
    deadline: string; // String!
    excerpt: string; // String!
    id: number; // Int!
    reward_amount: number; // Int!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    votes_count: number; // Int!
  }
  Category: { // root type
    cover_image?: string | null; // String
    icon?: string | null; // String
    id: number; // Int!
    title: string; // String!
  }
  LnurlDetails: { // root type
    commentAllowed?: number | null; // Int
    maxSendable?: number | null; // Int
    metadata?: string | null; // String
    minSendable?: number | null; // Int
  }
  Mutation: {};
  PostComment: { // root type
    author: NexusGenRootTypes['User']; // User!
    body: string; // String!
    date: string; // String!
    id: number; // Int!
  }
  Project: { // root type
    cover_image: string; // String!
    description: string; // String!
    id: number; // Int!
    lightning_address?: string | null; // String
    lnurl_callback_url?: string | null; // String
    screenshots: string[]; // [String!]!
    thumbnail_image: string; // String!
    title: string; // String!
    votes_count: number; // Int!
    website: string; // String!
  }
  Query: {};
  Question: { // root type
    answers_count: number; // Int!
    author: NexusGenRootTypes['User']; // User!
    comments: NexusGenRootTypes['PostComment'][]; // [PostComment!]!
    cover_image: string; // String!
    date: string; // String!
    deadline: string; // String!
    excerpt: string; // String!
    id: number; // Int!
    reward_amount: number; // Int!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    votes_count: number; // Int!
  }
  Story: { // root type
    author: NexusGenRootTypes['User']; // User!
    comments_count: number; // Int!
    cover_image: string; // String!
    date: string; // String!
    excerpt: string; // String!
    id: number; // Int!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    votes_count: number; // Int!
  }
  Tag: { // root type
    id: number; // Int!
    title: string; // String!
  }
  User: { // root type
    id: number; // Int!
    image: string; // String!
    name: string; // String!
  }
  Vote: { // root type
    amount_in_sat: number; // Int!
    id: number; // Int!
    paid: boolean; // Boolean!
    payment_hash: string; // String!
    payment_request: string; // String!
  }
}

export interface NexusGenInterfaces {
  PostBase: NexusGenRootTypes['Bounty'] | NexusGenRootTypes['Question'] | NexusGenRootTypes['Story'];
}

export interface NexusGenUnions {
  Post: NexusGenRootTypes['Bounty'] | NexusGenRootTypes['Question'] | NexusGenRootTypes['Story'];
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Award: { // field return type
    id: number; // Int!
    image: string; // String!
    project: NexusGenRootTypes['Project']; // Project!
    title: string; // String!
    url: string; // String!
  }
  Bounty: { // field return type
    applicants_count: number; // Int!
    author: NexusGenRootTypes['User']; // User!
    cover_image: string; // String!
    date: string; // String!
    deadline: string; // String!
    excerpt: string; // String!
    id: number; // Int!
    reward_amount: number; // Int!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    type: string; // String!
    votes_count: number; // Int!
  }
  Category: { // field return type
    apps_count: number; // Int!
    cover_image: string | null; // String
    icon: string | null; // String
    id: number; // Int!
    project: NexusGenRootTypes['Project'][]; // [Project!]!
    title: string; // String!
    votes_sum: number; // Int!
  }
  LnurlDetails: { // field return type
    commentAllowed: number | null; // Int
    maxSendable: number | null; // Int
    metadata: string | null; // String
    minSendable: number | null; // Int
  }
  Mutation: { // field return type
    confirmVote: NexusGenRootTypes['Vote']; // Vote!
    vote: NexusGenRootTypes['Vote']; // Vote!
  }
  PostComment: { // field return type
    author: NexusGenRootTypes['User']; // User!
    body: string; // String!
    date: string; // String!
    id: number; // Int!
  }
  Project: { // field return type
    awards: NexusGenRootTypes['Award'][]; // [Award!]!
    category: NexusGenRootTypes['Category']; // Category!
    cover_image: string; // String!
    description: string; // String!
    id: number; // Int!
    lightning_address: string | null; // String
    lnurl_callback_url: string | null; // String
    screenshots: string[]; // [String!]!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    thumbnail_image: string; // String!
    title: string; // String!
    votes_count: number; // Int!
    website: string; // String!
  }
  Query: { // field return type
    allCategories: NexusGenRootTypes['Category'][]; // [Category!]!
    allProjects: NexusGenRootTypes['Project'][]; // [Project!]!
    getCategory: NexusGenRootTypes['Category']; // Category!
    getFeed: NexusGenRootTypes['Post'][]; // [Post!]!
    getLnurlDetailsForProject: NexusGenRootTypes['LnurlDetails']; // LnurlDetails!
    getPostById: NexusGenRootTypes['Post']; // Post!
    getProject: NexusGenRootTypes['Project']; // Project!
    hottestProjects: NexusGenRootTypes['Project'][]; // [Project!]!
    newProjects: NexusGenRootTypes['Project'][]; // [Project!]!
    projectsByCategory: NexusGenRootTypes['Project'][]; // [Project!]!
    searchProjects: NexusGenRootTypes['Project'][]; // [Project!]!
  }
  Question: { // field return type
    answers_count: number; // Int!
    author: NexusGenRootTypes['User']; // User!
    comments: NexusGenRootTypes['PostComment'][]; // [PostComment!]!
    cover_image: string; // String!
    date: string; // String!
    deadline: string; // String!
    excerpt: string; // String!
    id: number; // Int!
    reward_amount: number; // Int!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    type: string; // String!
    votes_count: number; // Int!
  }
  Story: { // field return type
    author: NexusGenRootTypes['User']; // User!
    comments_count: number; // Int!
    cover_image: string; // String!
    date: string; // String!
    excerpt: string; // String!
    id: number; // Int!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    type: string; // String!
    votes_count: number; // Int!
  }
  Tag: { // field return type
    id: number; // Int!
    project: NexusGenRootTypes['Project'][]; // [Project!]!
    title: string; // String!
  }
  User: { // field return type
    id: number; // Int!
    image: string; // String!
    name: string; // String!
  }
  Vote: { // field return type
    amount_in_sat: number; // Int!
    id: number; // Int!
    paid: boolean; // Boolean!
    payment_hash: string; // String!
    payment_request: string; // String!
    project: NexusGenRootTypes['Project']; // Project!
  }
  PostBase: { // field return type
    author: NexusGenRootTypes['User']; // User!
    date: string; // String!
    excerpt: string; // String!
    id: number; // Int!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    title: string; // String!
    votes_count: number; // Int!
  }
}

export interface NexusGenFieldTypeNames {
  Award: { // field return type name
    id: 'Int'
    image: 'String'
    project: 'Project'
    title: 'String'
    url: 'String'
  }
  Bounty: { // field return type name
    applicants_count: 'Int'
    author: 'User'
    cover_image: 'String'
    date: 'String'
    deadline: 'String'
    excerpt: 'String'
    id: 'Int'
    reward_amount: 'Int'
    tags: 'Tag'
    title: 'String'
    type: 'String'
    votes_count: 'Int'
  }
  Category: { // field return type name
    apps_count: 'Int'
    cover_image: 'String'
    icon: 'String'
    id: 'Int'
    project: 'Project'
    title: 'String'
    votes_sum: 'Int'
  }
  LnurlDetails: { // field return type name
    commentAllowed: 'Int'
    maxSendable: 'Int'
    metadata: 'String'
    minSendable: 'Int'
  }
  Mutation: { // field return type name
    confirmVote: 'Vote'
    vote: 'Vote'
  }
  PostComment: { // field return type name
    author: 'User'
    body: 'String'
    date: 'String'
    id: 'Int'
  }
  Project: { // field return type name
    awards: 'Award'
    category: 'Category'
    cover_image: 'String'
    description: 'String'
    id: 'Int'
    lightning_address: 'String'
    lnurl_callback_url: 'String'
    screenshots: 'String'
    tags: 'Tag'
    thumbnail_image: 'String'
    title: 'String'
    votes_count: 'Int'
    website: 'String'
  }
  Query: { // field return type name
    allCategories: 'Category'
    allProjects: 'Project'
    getCategory: 'Category'
    getFeed: 'Post'
    getLnurlDetailsForProject: 'LnurlDetails'
    getPostById: 'Post'
    getProject: 'Project'
    hottestProjects: 'Project'
    newProjects: 'Project'
    projectsByCategory: 'Project'
    searchProjects: 'Project'
  }
  Question: { // field return type name
    answers_count: 'Int'
    author: 'User'
    comments: 'PostComment'
    cover_image: 'String'
    date: 'String'
    deadline: 'String'
    excerpt: 'String'
    id: 'Int'
    reward_amount: 'Int'
    tags: 'Tag'
    title: 'String'
    type: 'String'
    votes_count: 'Int'
  }
  Story: { // field return type name
    author: 'User'
    comments_count: 'Int'
    cover_image: 'String'
    date: 'String'
    excerpt: 'String'
    id: 'Int'
    tags: 'Tag'
    title: 'String'
    type: 'String'
    votes_count: 'Int'
  }
  Tag: { // field return type name
    id: 'Int'
    project: 'Project'
    title: 'String'
  }
  User: { // field return type name
    id: 'Int'
    image: 'String'
    name: 'String'
  }
  Vote: { // field return type name
    amount_in_sat: 'Int'
    id: 'Int'
    paid: 'Boolean'
    payment_hash: 'String'
    payment_request: 'String'
    project: 'Project'
  }
  PostBase: { // field return type name
    author: 'User'
    date: 'String'
    excerpt: 'String'
    id: 'Int'
    tags: 'Tag'
    title: 'String'
    votes_count: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    confirmVote: { // args
      payment_request: string; // String!
      preimage: string; // String!
    }
    vote: { // args
      amount_in_sat: number; // Int!
      project_id: number; // Int!
    }
  }
  Query: {
    allProjects: { // args
      skip?: number | null; // Int
      take: number | null; // Int
    }
    getCategory: { // args
      id: number; // Int!
    }
    getFeed: { // args
      skip?: number | null; // Int
      take: number | null; // Int
    }
    getLnurlDetailsForProject: { // args
      project_id: number; // Int!
    }
    getPostById: { // args
      id: number; // Int!
    }
    getProject: { // args
      id: number; // Int!
    }
    hottestProjects: { // args
      skip?: number | null; // Int
      take: number | null; // Int
    }
    newProjects: { // args
      skip?: number | null; // Int
      take: number | null; // Int
    }
    projectsByCategory: { // args
      category_id: number; // Int!
      skip?: number | null; // Int
      take: number | null; // Int
    }
    searchProjects: { // args
      search: string; // String!
      skip?: number | null; // Int
      take: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Post: "Bounty" | "Question" | "Story"
  PostBase: "Bounty" | "Question" | "Story"
}

export interface NexusGenTypeInterfaces {
  Bounty: "PostBase"
  Question: "PostBase"
  Story: "PostBase"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Post" | "PostBase";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}