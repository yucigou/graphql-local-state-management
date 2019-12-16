import { GET_SELECTED_COUNTRIES } from './queries';

export const resolvers = {
  Mutation: {
    addOrRemoveFromSelectedCountries: (_, { country }, { cache }) => {
      const { selectedCountries } = cache.readQuery({
        query: GET_SELECTED_COUNTRIES
      });
      const data = {
        selectedCountries: selectedCountries.find(c => c.code === country.code)
          ? selectedCountries.filter(c => c.code !== country.code)
          : [...selectedCountries, country]
      };
      cache.writeQuery({ query: GET_SELECTED_COUNTRIES, data });
      return data.selectedCountries;
    }
  }
};
