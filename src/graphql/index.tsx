import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type Award = {
  __typename?: 'Award';
  id: Scalars['Int'];
  image: Scalars['String'];
  project: Project;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Bounty = PostBase & {
  __typename?: 'Bounty';
  applicants_count: Scalars['Int'];
  applications: Array<BountyApplication>;
  author: User;
  body: Scalars['String'];
  cover_image: Scalars['String'];
  createdAt: Scalars['Date'];
  deadline: Scalars['String'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  reward_amount: Scalars['Int'];
  tags: Array<Tag>;
  title: Scalars['String'];
  type: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type BountyApplication = {
  __typename?: 'BountyApplication';
  author: User;
  date: Scalars['String'];
  id: Scalars['Int'];
  workplan: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  apps_count: Scalars['Int'];
  cover_image: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  project: Array<Project>;
  title: Scalars['String'];
  votes_sum: Scalars['Int'];
};

export type Hackathon = {
  __typename?: 'Hackathon';
  cover_image: Scalars['String'];
  description: Scalars['String'];
  end_date: Scalars['Date'];
  id: Scalars['Int'];
  location: Scalars['String'];
  start_date: Scalars['Date'];
  title: Scalars['String'];
  topics: Array<Topic>;
  website: Scalars['String'];
};

export type LnurlDetails = {
  __typename?: 'LnurlDetails';
  commentAllowed: Maybe<Scalars['Int']>;
  maxSendable: Maybe<Scalars['Int']>;
  metadata: Maybe<Scalars['String']>;
  minSendable: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmVote: Vote;
  vote: Vote;
};


export type MutationConfirmVoteArgs = {
  payment_request: Scalars['String'];
  preimage: Scalars['String'];
};


export type MutationVoteArgs = {
  amount_in_sat: Scalars['Int'];
  item_id: Scalars['Int'];
  item_type: Vote_Item_Type;
};

export enum Post_Type {
  Bounty = 'Bounty',
  Question = 'Question',
  Story = 'Story'
}

export type Post = Bounty | Question | Story;

export type PostBase = {
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type PostComment = {
  __typename?: 'PostComment';
  author: User;
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  parentId: Maybe<Scalars['Int']>;
  votes_count: Scalars['Int'];
};

export type Project = {
  __typename?: 'Project';
  awards: Array<Award>;
  category: Category;
  cover_image: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  lightning_address: Maybe<Scalars['String']>;
  lnurl_callback_url: Maybe<Scalars['String']>;
  screenshots: Array<Scalars['String']>;
  tags: Array<Tag>;
  thumbnail_image: Scalars['String'];
  title: Scalars['String'];
  votes_count: Scalars['Int'];
  website: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allCategories: Array<Category>;
  allProjects: Array<Project>;
  allTopics: Array<Topic>;
  getAllHackathons: Array<Hackathon>;
  getCategory: Category;
  getFeed: Array<Post>;
  getLnurlDetailsForProject: LnurlDetails;
  getPostById: Post;
  getProject: Project;
  getTrendingPosts: Array<Post>;
  hottestProjects: Array<Project>;
  newProjects: Array<Project>;
  popularTopics: Array<Topic>;
  projectsByCategory: Array<Project>;
  searchProjects: Array<Project>;
};


export type QueryAllProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllHackathonsArgs = {
  sortBy: InputMaybe<Scalars['String']>;
  topic: InputMaybe<Scalars['Int']>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryGetFeedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
  topic?: InputMaybe<Scalars['Int']>;
};


export type QueryGetLnurlDetailsForProjectArgs = {
  project_id: Scalars['Int'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Int'];
  type: Post_Type;
};


export type QueryGetProjectArgs = {
  id: Scalars['Int'];
};


export type QueryHottestProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryNewProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryProjectsByCategoryArgs = {
  category_id: Scalars['Int'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchProjectsArgs = {
  search: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Question = PostBase & {
  __typename?: 'Question';
  answers_count: Scalars['Int'];
  author: User;
  body: Scalars['String'];
  comments: Array<PostComment>;
  createdAt: Scalars['Date'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  tags: Array<Tag>;
  title: Scalars['String'];
  type: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type Story = PostBase & {
  __typename?: 'Story';
  author: User;
  body: Scalars['String'];
  comments: Array<PostComment>;
  comments_count: Scalars['Int'];
  cover_image: Scalars['String'];
  createdAt: Scalars['Date'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  tags: Array<Tag>;
  title: Scalars['String'];
  topic: Topic;
  type: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Topic = {
  __typename?: 'Topic';
  icon: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum Vote_Item_Type {
  Bounty = 'Bounty',
  PostComment = 'PostComment',
  Project = 'Project',
  Question = 'Question',
  Story = 'Story',
  User = 'User'
}

export type Vote = {
  __typename?: 'Vote';
  amount_in_sat: Scalars['Int'];
  id: Scalars['Int'];
  item_id: Scalars['Int'];
  item_type: Vote_Item_Type;
  paid: Scalars['Boolean'];
  payment_hash: Scalars['String'];
  payment_request: Scalars['String'];
};

export type NavCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type NavCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'Category', id: number, title: string, icon: string | null, votes_sum: number }> };

export type SearchProjectsQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchProjectsQuery = { __typename?: 'Query', searchProjects: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, category: { __typename?: 'Category', title: string, id: number } }> };

export type AllTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTopicsQuery = { __typename?: 'Query', allTopics: Array<{ __typename?: 'Topic', id: number, title: string, icon: string }> };

export type GetHackathonsQueryVariables = Exact<{
  sortBy: InputMaybe<Scalars['String']>;
  topic: InputMaybe<Scalars['Int']>;
}>;


export type GetHackathonsQuery = { __typename?: 'Query', getAllHackathons: Array<{ __typename?: 'Hackathon', id: number, title: string, description: string, cover_image: string, start_date: any, end_date: any, location: string, website: string, topics: Array<{ __typename?: 'Topic', id: number, title: string, icon: string }> }> };

export type TrendingPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendingPostsQuery = { __typename?: 'Query', getTrendingPosts: Array<{ __typename?: 'Bounty', id: number, title: string, author: { __typename?: 'User', id: number, avatar: string } } | { __typename?: 'Question', id: number, title: string, author: { __typename?: 'User', id: number, avatar: string } } | { __typename?: 'Story', id: number, title: string, author: { __typename?: 'User', id: number, avatar: string } }> };

export type PopularTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularTopicsQuery = { __typename?: 'Query', popularTopics: Array<{ __typename?: 'Topic', id: number, title: string, icon: string }> };

export type FeedQueryVariables = Exact<{
  take: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sortBy: InputMaybe<Scalars['String']>;
  topic: InputMaybe<Scalars['Int']>;
}>;


export type FeedQuery = { __typename?: 'Query', getFeed: Array<{ __typename?: 'Bounty', id: number, title: string, createdAt: any, excerpt: string, votes_count: number, type: string, cover_image: string, deadline: string, reward_amount: number, applicants_count: number, author: { __typename?: 'User', id: number, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }> } | { __typename?: 'Question', id: number, title: string, createdAt: any, excerpt: string, votes_count: number, type: string, answers_count: number, author: { __typename?: 'User', id: number, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }>, comments: Array<{ __typename?: 'PostComment', id: number, createdAt: any, body: string, author: { __typename?: 'User', id: number, name: string, avatar: string } }> } | { __typename?: 'Story', id: number, title: string, createdAt: any, excerpt: string, votes_count: number, type: string, cover_image: string, comments_count: number, author: { __typename?: 'User', id: number, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }> }> };

export type PostDetailsQueryVariables = Exact<{
  id: Scalars['Int'];
  type: Post_Type;
}>;


export type PostDetailsQuery = { __typename?: 'Query', getPostById: { __typename?: 'Bounty', id: number, title: string, createdAt: any, body: string, votes_count: number, type: string, cover_image: string, deadline: string, reward_amount: number, applicants_count: number, author: { __typename?: 'User', id: number, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }>, applications: Array<{ __typename?: 'BountyApplication', id: number, date: string, workplan: string, author: { __typename?: 'User', id: number, name: string, avatar: string } }> } | { __typename?: 'Question', id: number, title: string, createdAt: any, body: string, votes_count: number, type: string, answers_count: number, author: { __typename?: 'User', id: number, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }>, comments: Array<{ __typename?: 'PostComment', id: number, createdAt: any, body: string, votes_count: number, parentId: number | null, author: { __typename?: 'User', id: number, name: string, avatar: string } }> } | { __typename?: 'Story', id: number, title: string, createdAt: any, body: string, votes_count: number, type: string, cover_image: string, comments_count: number, author: { __typename?: 'User', id: number, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }>, comments: Array<{ __typename?: 'PostComment', id: number, createdAt: any, body: string, votes_count: number, parentId: number | null, author: { __typename?: 'User', id: number, name: string, avatar: string } }> } };

export type CategoryPageQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type CategoryPageQuery = { __typename?: 'Query', projectsByCategory: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }>, getCategory: { __typename?: 'Category', id: number, title: string, cover_image: string | null, apps_count: number } };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'Category', id: number, title: string }> };

export type ExploreProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExploreProjectsQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'Category', id: number, title: string, project: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }> }>, newProjects: Array<{ __typename?: 'Project', id: number, title: string, thumbnail_image: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }> };

export type HottestProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type HottestProjectsQuery = { __typename?: 'Query', hottestProjects: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }> };

export type ProjectDetailsQueryVariables = Exact<{
  projectId: Scalars['Int'];
}>;


export type ProjectDetailsQuery = { __typename?: 'Query', getProject: { __typename?: 'Project', id: number, title: string, description: string, cover_image: string, thumbnail_image: string, screenshots: Array<string>, website: string, lightning_address: string | null, lnurl_callback_url: string | null, votes_count: number, category: { __typename?: 'Category', id: number, title: string }, awards: Array<{ __typename?: 'Award', title: string, image: string, url: string, id: number }>, tags: Array<{ __typename?: 'Tag', id: number, title: string }> } };

export type VoteMutationVariables = Exact<{
  itemType: Vote_Item_Type;
  itemId: Scalars['Int'];
  amountInSat: Scalars['Int'];
}>;


export type VoteMutation = { __typename?: 'Mutation', vote: { __typename?: 'Vote', id: number, amount_in_sat: number, payment_request: string, payment_hash: string, paid: boolean, item_type: Vote_Item_Type, item_id: number } };

export type ConfirmVoteMutationVariables = Exact<{
  paymentRequest: Scalars['String'];
  preimage: Scalars['String'];
}>;


export type ConfirmVoteMutation = { __typename?: 'Mutation', confirmVote: { __typename?: 'Vote', id: number, amount_in_sat: number, payment_request: string, payment_hash: string, paid: boolean, item_type: Vote_Item_Type, item_id: number } };


export const NavCategoriesDocument = gql`
    query NavCategories {
  allCategories {
    id
    title
    icon
    votes_sum
  }
}
    `;

/**
 * __useNavCategoriesQuery__
 *
 * To run a query within a React component, call `useNavCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNavCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<NavCategoriesQuery, NavCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NavCategoriesQuery, NavCategoriesQueryVariables>(NavCategoriesDocument, options);
      }
export function useNavCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavCategoriesQuery, NavCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NavCategoriesQuery, NavCategoriesQueryVariables>(NavCategoriesDocument, options);
        }
export type NavCategoriesQueryHookResult = ReturnType<typeof useNavCategoriesQuery>;
export type NavCategoriesLazyQueryHookResult = ReturnType<typeof useNavCategoriesLazyQuery>;
export type NavCategoriesQueryResult = Apollo.QueryResult<NavCategoriesQuery, NavCategoriesQueryVariables>;
export const SearchProjectsDocument = gql`
    query SearchProjects($search: String!) {
  searchProjects(search: $search) {
    id
    thumbnail_image
    title
    category {
      title
      id
    }
  }
}
    `;

/**
 * __useSearchProjectsQuery__
 *
 * To run a query within a React component, call `useSearchProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProjectsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchProjectsQuery(baseOptions: Apollo.QueryHookOptions<SearchProjectsQuery, SearchProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchProjectsQuery, SearchProjectsQueryVariables>(SearchProjectsDocument, options);
      }
export function useSearchProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProjectsQuery, SearchProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchProjectsQuery, SearchProjectsQueryVariables>(SearchProjectsDocument, options);
        }
export type SearchProjectsQueryHookResult = ReturnType<typeof useSearchProjectsQuery>;
export type SearchProjectsLazyQueryHookResult = ReturnType<typeof useSearchProjectsLazyQuery>;
export type SearchProjectsQueryResult = Apollo.QueryResult<SearchProjectsQuery, SearchProjectsQueryVariables>;
export const AllTopicsDocument = gql`
    query allTopics {
  allTopics {
    id
    title
    icon
  }
}
    `;

/**
 * __useAllTopicsQuery__
 *
 * To run a query within a React component, call `useAllTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTopicsQuery(baseOptions?: Apollo.QueryHookOptions<AllTopicsQuery, AllTopicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTopicsQuery, AllTopicsQueryVariables>(AllTopicsDocument, options);
      }
export function useAllTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTopicsQuery, AllTopicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTopicsQuery, AllTopicsQueryVariables>(AllTopicsDocument, options);
        }
export type AllTopicsQueryHookResult = ReturnType<typeof useAllTopicsQuery>;
export type AllTopicsLazyQueryHookResult = ReturnType<typeof useAllTopicsLazyQuery>;
export type AllTopicsQueryResult = Apollo.QueryResult<AllTopicsQuery, AllTopicsQueryVariables>;
export const GetHackathonsDocument = gql`
    query getHackathons($sortBy: String, $topic: Int) {
  getAllHackathons(sortBy: $sortBy, topic: $topic) {
    id
    title
    description
    cover_image
    start_date
    end_date
    location
    website
    topics {
      id
      title
      icon
    }
  }
}
    `;

/**
 * __useGetHackathonsQuery__
 *
 * To run a query within a React component, call `useGetHackathonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHackathonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHackathonsQuery({
 *   variables: {
 *      sortBy: // value for 'sortBy'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useGetHackathonsQuery(baseOptions?: Apollo.QueryHookOptions<GetHackathonsQuery, GetHackathonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHackathonsQuery, GetHackathonsQueryVariables>(GetHackathonsDocument, options);
      }
export function useGetHackathonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHackathonsQuery, GetHackathonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHackathonsQuery, GetHackathonsQueryVariables>(GetHackathonsDocument, options);
        }
export type GetHackathonsQueryHookResult = ReturnType<typeof useGetHackathonsQuery>;
export type GetHackathonsLazyQueryHookResult = ReturnType<typeof useGetHackathonsLazyQuery>;
export type GetHackathonsQueryResult = Apollo.QueryResult<GetHackathonsQuery, GetHackathonsQueryVariables>;
export const TrendingPostsDocument = gql`
    query TrendingPosts {
  getTrendingPosts {
    ... on Story {
      id
      title
      author {
        id
        avatar
      }
    }
    ... on Bounty {
      id
      title
      author {
        id
        avatar
      }
    }
    ... on Question {
      id
      title
      author {
        id
        avatar
      }
    }
  }
}
    `;

/**
 * __useTrendingPostsQuery__
 *
 * To run a query within a React component, call `useTrendingPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendingPostsQuery(baseOptions?: Apollo.QueryHookOptions<TrendingPostsQuery, TrendingPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendingPostsQuery, TrendingPostsQueryVariables>(TrendingPostsDocument, options);
      }
export function useTrendingPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingPostsQuery, TrendingPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendingPostsQuery, TrendingPostsQueryVariables>(TrendingPostsDocument, options);
        }
export type TrendingPostsQueryHookResult = ReturnType<typeof useTrendingPostsQuery>;
export type TrendingPostsLazyQueryHookResult = ReturnType<typeof useTrendingPostsLazyQuery>;
export type TrendingPostsQueryResult = Apollo.QueryResult<TrendingPostsQuery, TrendingPostsQueryVariables>;
export const PopularTopicsDocument = gql`
    query PopularTopics {
  popularTopics {
    id
    title
    icon
  }
}
    `;

/**
 * __usePopularTopicsQuery__
 *
 * To run a query within a React component, call `usePopularTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePopularTopicsQuery(baseOptions?: Apollo.QueryHookOptions<PopularTopicsQuery, PopularTopicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularTopicsQuery, PopularTopicsQueryVariables>(PopularTopicsDocument, options);
      }
export function usePopularTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularTopicsQuery, PopularTopicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularTopicsQuery, PopularTopicsQueryVariables>(PopularTopicsDocument, options);
        }
export type PopularTopicsQueryHookResult = ReturnType<typeof usePopularTopicsQuery>;
export type PopularTopicsLazyQueryHookResult = ReturnType<typeof usePopularTopicsLazyQuery>;
export type PopularTopicsQueryResult = Apollo.QueryResult<PopularTopicsQuery, PopularTopicsQueryVariables>;
export const FeedDocument = gql`
    query Feed($take: Int, $skip: Int, $sortBy: String, $topic: Int) {
  getFeed(take: $take, skip: $skip, sortBy: $sortBy, topic: $topic) {
    ... on Story {
      id
      title
      createdAt
      author {
        id
        name
        avatar
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      comments_count
    }
    ... on Bounty {
      id
      title
      createdAt
      author {
        id
        name
        avatar
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      deadline
      reward_amount
      applicants_count
    }
    ... on Question {
      id
      title
      createdAt
      author {
        id
        name
        avatar
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      answers_count
      comments {
        id
        createdAt
        body
        author {
          id
          name
          avatar
        }
      }
    }
  }
}
    `;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      sortBy: // value for 'sortBy'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const PostDetailsDocument = gql`
    query PostDetails($id: Int!, $type: POST_TYPE!) {
  getPostById(id: $id, type: $type) {
    ... on Story {
      id
      title
      createdAt
      author {
        id
        name
        avatar
      }
      body
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      comments_count
      comments {
        id
        createdAt
        body
        votes_count
        parentId
        author {
          id
          name
          avatar
        }
      }
    }
    ... on Bounty {
      id
      title
      createdAt
      author {
        id
        name
        avatar
      }
      body
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      deadline
      reward_amount
      applicants_count
      applications {
        id
        date
        workplan
        author {
          id
          name
          avatar
        }
      }
    }
    ... on Question {
      id
      title
      createdAt
      author {
        id
        name
        avatar
      }
      body
      tags {
        id
        title
      }
      votes_count
      type
      answers_count
      comments {
        id
        createdAt
        body
        votes_count
        parentId
        author {
          id
          name
          avatar
        }
      }
    }
  }
}
    `;

/**
 * __usePostDetailsQuery__
 *
 * To run a query within a React component, call `usePostDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePostDetailsQuery(baseOptions: Apollo.QueryHookOptions<PostDetailsQuery, PostDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostDetailsQuery, PostDetailsQueryVariables>(PostDetailsDocument, options);
      }
export function usePostDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostDetailsQuery, PostDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostDetailsQuery, PostDetailsQueryVariables>(PostDetailsDocument, options);
        }
export type PostDetailsQueryHookResult = ReturnType<typeof usePostDetailsQuery>;
export type PostDetailsLazyQueryHookResult = ReturnType<typeof usePostDetailsLazyQuery>;
export type PostDetailsQueryResult = Apollo.QueryResult<PostDetailsQuery, PostDetailsQueryVariables>;
export const CategoryPageDocument = gql`
    query CategoryPage($categoryId: Int!) {
  projectsByCategory(category_id: $categoryId) {
    id
    thumbnail_image
    title
    votes_count
    category {
      title
      id
    }
  }
  getCategory(id: $categoryId) {
    id
    title
    cover_image
    apps_count
  }
}
    `;

/**
 * __useCategoryPageQuery__
 *
 * To run a query within a React component, call `useCategoryPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryPageQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryPageQuery(baseOptions: Apollo.QueryHookOptions<CategoryPageQuery, CategoryPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryPageQuery, CategoryPageQueryVariables>(CategoryPageDocument, options);
      }
export function useCategoryPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryPageQuery, CategoryPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryPageQuery, CategoryPageQueryVariables>(CategoryPageDocument, options);
        }
export type CategoryPageQueryHookResult = ReturnType<typeof useCategoryPageQuery>;
export type CategoryPageLazyQueryHookResult = ReturnType<typeof useCategoryPageLazyQuery>;
export type CategoryPageQueryResult = Apollo.QueryResult<CategoryPageQuery, CategoryPageQueryVariables>;
export const AllCategoriesDocument = gql`
    query AllCategories {
  allCategories {
    id
    title
  }
}
    `;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
      }
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const ExploreProjectsDocument = gql`
    query ExploreProjects {
  allCategories {
    id
    title
    project {
      id
      thumbnail_image
      title
      votes_count
      category {
        title
        id
      }
    }
  }
  newProjects {
    id
    title
    thumbnail_image
    votes_count
    category {
      title
      id
    }
  }
}
    `;

/**
 * __useExploreProjectsQuery__
 *
 * To run a query within a React component, call `useExploreProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExploreProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExploreProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useExploreProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ExploreProjectsQuery, ExploreProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExploreProjectsQuery, ExploreProjectsQueryVariables>(ExploreProjectsDocument, options);
      }
export function useExploreProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExploreProjectsQuery, ExploreProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExploreProjectsQuery, ExploreProjectsQueryVariables>(ExploreProjectsDocument, options);
        }
export type ExploreProjectsQueryHookResult = ReturnType<typeof useExploreProjectsQuery>;
export type ExploreProjectsLazyQueryHookResult = ReturnType<typeof useExploreProjectsLazyQuery>;
export type ExploreProjectsQueryResult = Apollo.QueryResult<ExploreProjectsQuery, ExploreProjectsQueryVariables>;
export const HottestProjectsDocument = gql`
    query HottestProjects {
  hottestProjects {
    id
    thumbnail_image
    title
    votes_count
    category {
      title
      id
    }
  }
}
    `;

/**
 * __useHottestProjectsQuery__
 *
 * To run a query within a React component, call `useHottestProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHottestProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHottestProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHottestProjectsQuery(baseOptions?: Apollo.QueryHookOptions<HottestProjectsQuery, HottestProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HottestProjectsQuery, HottestProjectsQueryVariables>(HottestProjectsDocument, options);
      }
export function useHottestProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HottestProjectsQuery, HottestProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HottestProjectsQuery, HottestProjectsQueryVariables>(HottestProjectsDocument, options);
        }
export type HottestProjectsQueryHookResult = ReturnType<typeof useHottestProjectsQuery>;
export type HottestProjectsLazyQueryHookResult = ReturnType<typeof useHottestProjectsLazyQuery>;
export type HottestProjectsQueryResult = Apollo.QueryResult<HottestProjectsQuery, HottestProjectsQueryVariables>;
export const ProjectDetailsDocument = gql`
    query ProjectDetails($projectId: Int!) {
  getProject(id: $projectId) {
    id
    title
    description
    cover_image
    thumbnail_image
    screenshots
    website
    lightning_address
    lnurl_callback_url
    votes_count
    category {
      id
      title
    }
    awards {
      title
      image
      url
      id
    }
    tags {
      id
      title
    }
  }
}
    `;

/**
 * __useProjectDetailsQuery__
 *
 * To run a query within a React component, call `useProjectDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectDetailsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useProjectDetailsQuery(baseOptions: Apollo.QueryHookOptions<ProjectDetailsQuery, ProjectDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectDetailsQuery, ProjectDetailsQueryVariables>(ProjectDetailsDocument, options);
      }
export function useProjectDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectDetailsQuery, ProjectDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectDetailsQuery, ProjectDetailsQueryVariables>(ProjectDetailsDocument, options);
        }
export type ProjectDetailsQueryHookResult = ReturnType<typeof useProjectDetailsQuery>;
export type ProjectDetailsLazyQueryHookResult = ReturnType<typeof useProjectDetailsLazyQuery>;
export type ProjectDetailsQueryResult = Apollo.QueryResult<ProjectDetailsQuery, ProjectDetailsQueryVariables>;
export const VoteDocument = gql`
    mutation Vote($itemType: VOTE_ITEM_TYPE!, $itemId: Int!, $amountInSat: Int!) {
  vote(item_type: $itemType, item_id: $itemId, amount_in_sat: $amountInSat) {
    id
    amount_in_sat
    payment_request
    payment_hash
    paid
    item_type
    item_id
  }
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      itemType: // value for 'itemType'
 *      itemId: // value for 'itemId'
 *      amountInSat: // value for 'amountInSat'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const ConfirmVoteDocument = gql`
    mutation ConfirmVote($paymentRequest: String!, $preimage: String!) {
  confirmVote(payment_request: $paymentRequest, preimage: $preimage) {
    id
    amount_in_sat
    payment_request
    payment_hash
    paid
    item_type
    item_id
  }
}
    `;
export type ConfirmVoteMutationFn = Apollo.MutationFunction<ConfirmVoteMutation, ConfirmVoteMutationVariables>;

/**
 * __useConfirmVoteMutation__
 *
 * To run a mutation, you first call `useConfirmVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmVoteMutation, { data, loading, error }] = useConfirmVoteMutation({
 *   variables: {
 *      paymentRequest: // value for 'paymentRequest'
 *      preimage: // value for 'preimage'
 *   },
 * });
 */
export function useConfirmVoteMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmVoteMutation, ConfirmVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmVoteMutation, ConfirmVoteMutationVariables>(ConfirmVoteDocument, options);
      }
export type ConfirmVoteMutationHookResult = ReturnType<typeof useConfirmVoteMutation>;
export type ConfirmVoteMutationResult = Apollo.MutationResult<ConfirmVoteMutation>;
export type ConfirmVoteMutationOptions = Apollo.BaseMutationOptions<ConfirmVoteMutation, ConfirmVoteMutationVariables>;