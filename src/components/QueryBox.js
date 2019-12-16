import React, { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { COUNTRY_QUERY } from '../graphql/queries';
import { ADD_OR_REMOVE_SELECTED_COUNTRIES } from '../graphql/mutations';

export default function QueryBox() {
  const [mutate] = useMutation(ADD_OR_REMOVE_SELECTED_COUNTRIES);

  const [queryCountry, { loading, error, data }] = useLazyQuery(COUNTRY_QUERY);

  useEffect(() => {
    if (data) {
      mutate({
        variables: {
          country: data.country
        }
      });
    }
  }, [mutate, data]);

  const handleEnter = e => {
    if (e.key === 'Enter') {
      queryCountry({
        variables: { code: e.target.value }
      });
    }
  };

  if (loading) {
    console.log('loading...');
  }

  if (error) {
    console.log('error: ', error);
  }

  return (
    <div>
      Country code:{' '}
      <input type="text" name="query" id="query" onKeyUp={handleEnter} />
    </div>
  );
}
