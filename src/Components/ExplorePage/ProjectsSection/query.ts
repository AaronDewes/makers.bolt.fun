import { gql } from "@apollo/client";

export const QUERY_ALL_CATEGORIES_PROJECTS = gql`
  query AllCategoriesProjects {
    allCategories {
      id
      title
      project {
        id
        thumbnail_image
        title
        votes_count
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