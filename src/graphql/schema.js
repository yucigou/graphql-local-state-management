import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    selectedCountries: [Country]!
  }

  extend type Mutation {
    addOrRemoveFromSelectedCountries(country: Country!): [Country]
  }
`;
