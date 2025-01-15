import { gql, DocumentNode } from '@apollo/client';

export const LOGIN_ACTION_USER: DocumentNode = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        email
        role {
          id
          name
        }
        createdAt
        updatedAt
      }
      access_token
      refresh_token
      error {
        message
      }
    }
  }
`;