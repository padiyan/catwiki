import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../context/loading";

export default function useGetBreed(breedId) {

    const [breed, setBreed] = useState(null);
    const { setLoading } = useContext(LoadingContext);

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
          console.log(err)
          throw new Error('Error from catch')
        }
      }
      fetchData()
      }, [breedId]);

      return { breed };
}