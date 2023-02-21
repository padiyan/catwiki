import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../context/context";
import { ErrorContext } from "../context/context";

export default function useGetBreed(breedId) {

    const [breed, setBreed] = React.useState(null);
    const { setLoading } = useContext(LoadingContext);
    const { setError } = useContext(ErrorContext);

    useEffect(() => {
      async function fetchData() {
        try {
          if (breedId) {
            setLoading(true)
            const response = await fetch(`/breed/${breedId}`)
            const { details } = await response.json()
            setBreed(details)
            setLoading(false)
          }
        }
        catch(err) {
          const message = `Error calling /breed/${breedId}`
          setLoading(false)
          console.log(err)
          setError(message)
          throw new Error(message)
        }
      }
      fetchData()
      // eslint-disable-next-line
      }, [breedId]);
      return { breed };
}