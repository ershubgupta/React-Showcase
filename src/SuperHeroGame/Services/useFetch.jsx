import axios from "axios";
import React, { useEffect, useState } from "react";

const access_Key = 5068009966558846;

export default function useFetch(heroId) {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('1')
    async function fetchData() {
      // await axios
      //   .get(`${access_Key}/${heroId}`)
      //   .then(function (response) {
      //     console.log(response);
      //     setHeroDetails(response.data);
      //   })
      //   .catch((error) => {
      //     setError(error);
      //   });
      try {
        const response = await fetch(`${access_Key}/${heroId}`);
        console.log(response);
        if (response.ok) {
          const json = await response.json();
          console.log(json)
          setData(json);
        } else {
          console.log(response)
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // return () => {};
  }, [heroId]);
console.log(data, error);
  return { data , error, loading};
}
