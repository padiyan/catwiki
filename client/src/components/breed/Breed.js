import { useContext } from "react";
import useGetBreed from "../../use/useGetBreed"
import BreedPhotos from "./BreedPhotos"
import { LoadingContext } from "../../context/loading";
import "./Breed.css"

export default function Breed({breedId}) {
    const { loading } = useContext(LoadingContext);
    const { breed } = useGetBreed(breedId);
    return (
        <>
            { !loading && breed && (
                <>
                    <div className="breed">
                        <section className="photo">
                            <img className="image" src={breed.photo.url} />
                        </section>
                        <section className="details">
                            <h3>{breed.name}</h3>
                            <p>{breed.description}</p>
                            <ul>
                                <li><b>Origin:</b> {breed.origin}</li>
                                <li><b>temperament:</b> {breed.temperament}</li>
                            </ul>
                        </section>
                    </div>
                    <div>
                        <BreedPhotos breedPhotos={breed.photos} />
                    </div>
                </>
            )}
        </>
    )
}