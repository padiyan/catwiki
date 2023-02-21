import './BreedPhotos.css'
export default function BreedPhotos({breedPhotos}) {
    const photos = breedPhotos.map((photo) => <img className="image" key={photo.id} src={photo.url} alt={photo.id}/>)
    return (
        <div>
            <h3 className="heading">Other Photos</h3>
            <div className="breed-photos">
                { photos }
            </div>
        </div>
    )
}