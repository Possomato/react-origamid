import React from 'react';

export default function useFetch() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    try{
      setError(null)
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (erro){
      setError('erro')
    } finally{
      setLoading(false);
    }

  }

  return { data, error, loading, request };
}
 