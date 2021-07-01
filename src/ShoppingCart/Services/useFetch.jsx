import { useState, useEffect} from 'react';

const baseUrl = 'https://fakestoreapi.com/';
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('in useFetch')
  useEffect(() => {
    console.log(baseUrl + url);
    async function fetchData() {
      try {
        const response = await fetch(baseUrl + url);
        console.log(response);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, error, loading };
}