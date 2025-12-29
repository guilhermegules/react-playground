import { gql } from "@apollo/client";

export const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          rating
          body
          title
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
