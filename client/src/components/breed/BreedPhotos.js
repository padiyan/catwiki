import './BreedPhotos.css'
export default function BreedPhotos({breedPhotos}) {
    const photos = breedPhotos.map((photo) => <img className="image" key={photo.id} src={photo.url} />)
    return (
        <div>
            <h4>Other Photos</h4>
            <div className="breed-photos">
                { photos }
            </div>
        </div>
    )
}