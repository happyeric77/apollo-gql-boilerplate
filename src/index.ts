import { gql, ApolloServer } from "apollo-server";

const typeDefs = gql(`
  type User {
    username: String
  }
  type Query {
    users: [User]
  }
`);

const resolvers = {
  Query: {
    users: () => [{ username: "colorfulLife" }],
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then((res) => {
  console.log("Listen to", res.url);
});
