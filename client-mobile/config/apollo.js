import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000", //"https://eefb-139-228-111-126.ngrok-free.app",
  cache: new InMemoryCache(),
});

export default client;
