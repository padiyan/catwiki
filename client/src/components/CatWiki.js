import { useState } from "react"
import Search from "./search/Search";
import Breed from "./breed/Breed";
import { LoadingContext } from "../context/loading";

export default function CatWiki () {

    const [breedId, setBreedId] = useState(null);
    const [loading, setLoading] = useState(false);

      function handleSelectBreed(id) {
        setBreedId(id)
      }

    return (
        <div>
            <LoadingContext.Provider value={({loading, setLoading})}>
              <div>
                <Search handleSelect={handleSelectBreed}/>
              </div>
              { loading && <p> Loading ...</p>}
              { breedId && <Breed breedId={breedId} /> }
            </LoadingContext.Provider>
        </div>
    )
}