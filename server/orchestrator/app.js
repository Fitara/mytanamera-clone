const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { productsDefs, productsResolver } = require('./schema/products');

const server = new ApolloServer({
    typeDefs: [productsDefs],
    resolvers: [productsResolver],
    introspection: true,
});

startStandaloneServer(server, {
  listen: { port: 4000 || process.env.PORT },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});