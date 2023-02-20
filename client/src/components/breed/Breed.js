import { useContext } from "react";
import useGetBreed from "../../use/useGetBreed"
import BreedPhotos from "./BreedPhotos"
import { LoadingContext } from "../../context/loading";
import Loader from '../loader/Loader';
import Scale from "../scale/Scale";
import "./Breed.css"

export default function Breed({breedId}) {
    const { loading } = useContext(LoadingContext);
    const { breed } = useGetBreed(breedId);
    return (
        <>  
            { loading && <Loader /> }
            { !loading && breed && (
                <>
                    <div className="breed">
                        <section className="photo">
                            <img className="image" src={breed.photo.url} />
                        </section>
                        <section className="details">
                            <h2>{breed.name}</h2>
                            <p className="description">{breed.description}</p>
                            <ul>
                                <li className="properties"><p><b>Temperament:</b></p><p>{breed.temperament}</p></li>
                                <li className="properties"><p><b>Origin:</b></p><p>{breed.origin}</p></li>
                                <li className="properties"><p><b>Life Span:</b></p><p>{breed.life_span}</p></li>
                                <li className="properties"><p><b>Adaptability:</b></p><Scale value={breed.adaptability}/></li>
                                <li className="properties"><p><b>Affection Level:</b></p><Scale value={breed.affection_level}/></li>
                                <li className="properties"><p><b>Child Friendly:</b></p><Scale value={breed.child_friendly}/></li>
                                <li className="properties"><p><b>Grooming:</b></p><Scale value={breed.grooming}/></li>
                                <li className="properties"><p><b>Intelligence:</b></p><Scale value={breed.intelligence}/></li>
                                <li className="properties"><p><b>Health Issues:</b></p><Scale value={breed.health_issues}/></li>
                                <li className="properties"><p><b>Social Needs:</b></p><Scale value={breed.social_needs}/></li>
                                <li className="properties"><p><b>Stranger Friendly:</b></p><Scale value={breed.stranger_friendly}/></li>
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