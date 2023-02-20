import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../context/loading";

export default function useGetBreeds() {
    const [breeds, setBreeds] = useState(null);
    const { setLoading } = useContext(LoadingContext);
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
            console.log(err)
            throw new Error('Error from catch')
          }
        }
        fetchData()
      }, []);
      return { breeds };
}