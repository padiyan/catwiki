import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../context/loading";
import { ErrorContext } from "../context/error";

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
      }, [breedId]);
      return { breed };
}