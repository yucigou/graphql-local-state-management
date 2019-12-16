import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SELECTED_COUNTRIES } from '../graphql/queries';

export default function SelectedCountries() {
  const { loading, error, data } = useQuery(GET_SELECTED_COUNTRIES);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Something went wrong.</p>;
  return (
    <section>
      <h3>List of all selected countries</h3>
      <div className="countrylist">
        {data &&
          data.selectedCountries &&
          data.selectedCountries.map(country => (
            <Fragment key={country.code}>
              <div>({country.code})</div>
              <div>{country.name}</div>
            </Fragment>
          ))}
      </div>
    </section>
  );
}
