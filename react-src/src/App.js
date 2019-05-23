import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

const App = () => <ApolloProvider client={client}>"Ayeah"</ApolloProvider>;

export default App;
