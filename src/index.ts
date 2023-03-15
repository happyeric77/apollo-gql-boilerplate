import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then((res) => {
  console.log("Listen to ", res.url);
});
