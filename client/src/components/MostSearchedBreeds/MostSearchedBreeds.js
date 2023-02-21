import "./MostSearchedBreeds.css"

export default function MostSearchedBreeds({breeds}) {
    const mostSearched = breeds ? breeds.slice(0,7) : []
    return (
        <>  
            <h3 className="heading">Most Searched Breeds</h3>
            <div className="most-searched">
                { breeds && mostSearched.map((breed) => (
                    <div key={breed.id}>
                        <img className="image" src={breed.image.url} alt={breed.name}/> 
                        <p><b>{breed.name}</b></p>
                    </div>)) }
            </div>
        </>
    )
}