import gql from 'graphql-tag';

export const ADD_OR_REMOVE_SELECTED_COUNTRIES = gql`
  mutation addOrRemoveFromSelectedCountries($country: Country!) {
    addOrRemoveFromSelectedCountries(country: $country) @client
  }
`;
