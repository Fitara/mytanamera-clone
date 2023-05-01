import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://b828-111-95-16-181.ngrok-free.app",
  cache: new InMemoryCache(),
});

export default client;