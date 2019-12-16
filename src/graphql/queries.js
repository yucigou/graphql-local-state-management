import gql from 'graphql-tag';

export const COUNTRY_QUERY = gql`
  query($code: String!) {
    country(code: $code) {
      code
      name
      native
      phone
      continent {
        name
      }
      currency
      languages {
        name
      }
      emoji
      emojiU
    }
  }
`;

export const GET_SELECTED_COUNTRIES = gql`
  query {
    selectedCountries @client {
      name
      code
    }
  }
`;
