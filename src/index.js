import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';

import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { GET_SELECTED_COUNTRIES } from './graphql/queries';

import App from './components/App';

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com'
});

const cache = new InMemoryCache();

const init = async () => {
  await persistCache({
    cache,
    storage: window.localStorage
  });

  const client = new ApolloClient({
    link: httpLink,
    cache,
    typeDefs,
    resolvers
  });

  /* Initialize the local state if not yet */
  try {
    cache.readQuery({
      query: GET_SELECTED_COUNTRIES
    });
  } catch (error) {
    cache.writeData({
      data: {
        selectedCountries: []
      }
    });
  }

  const ApolloApp = () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

  ReactDOM.render(<ApolloApp />, document.getElementById('root'));
};

init();
