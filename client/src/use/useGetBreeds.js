import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../context/loading";
import { ErrorContext } from "../context/error";

export default function useGetBreeds() {

    const [breeds, setBreeds] = useState(null);
    const { loading, setLoading } = useContext(LoadingContext);
    const { setError } = useContext(ErrorContext);

    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true)
            const response = await fetch("/breeds")
            const { breeds } = await response.json()
            setBreeds(breeds);
            setLoading(false);
          }
          catch(err) {
            const message = `Error calling /breeds`
            setLoading(false)
            console.log(err)
            setError(message)
            throw new Error(message)
          }
        }
        fetchData()
      }, []);

      return { loading, breeds };
}