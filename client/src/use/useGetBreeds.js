import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../context/context";
import { ErrorContext } from "../context/context";

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
        // eslint-disable-next-line
      }, []);

      return { loading, breeds };
}