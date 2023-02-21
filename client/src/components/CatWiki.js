import { useState } from "react"
import Search from "./search/Search";
import Breed from "./breed/Breed";
import Error from "./error/Error";
import { LoadingContext } from "../context/context";
import { ErrorContext } from "../context/context";

export default function CatWiki () {

    const [breedId, setBreedId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

      function handleSelectBreed(id) {
        setBreedId(id)
      }

    return (
        <div>
            <LoadingContext.Provider value={({loading, setLoading})}>
              <ErrorContext.Provider value={({error, setError})}>
                <Error />
                <div>
                  <Search handleSelect={handleSelectBreed}/>
                </div>
                { breedId && <Breed breedId={breedId} /> }
              </ErrorContext.Provider>
            </LoadingContext.Provider>
        </div>
    )
}