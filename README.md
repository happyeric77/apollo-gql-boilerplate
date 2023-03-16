# GraphQL-Apollo-ts Boilerplate

# How to use

1. Clone boilerplate

```
git clone git@github.com:happyeric77/apollo-gql-boilerplate.git
```

2. Install dependency

```
yarn install
```

3. Run test server on localhost 4000

```
yarn dev
```

4. Modify Schema in typeDefs constant / Resolvers in resolvers constant

- Schema (./src/schema)

```
const typeDefs = gql(`
  // custom schema
  ...
`);
```

- Resolver (./src/resolvers)

```
const resolvers = {
  // custom resolvers
}
```

5. Run production server

```
yarn start
```
