import { gql } from "apollo-server";

export const typeDefs = gql(`
  type User {
    username: String
  }
  type Query {
    users: [User]
  }
`);
