import "./MostSearchedBreeds.css"

export default function MostSearchedBreeds({breeds, handleSelect}) {
    const mostSearched = breeds ? breeds.slice(0,7) : []
    return (
        <>  
            <h3 className="heading">Most Searched Breeds</h3>
            <div className="most-searched">
                { breeds && mostSearched.map(({id, name, image}) => (
                    <div key={id} onClick={() => handleSelect(id)} >
                        <img className="image" src={image.url} alt={name}/> 
                        <p><b>{name}</b></p>
                    </div>)) }
            </div>
        </>
    )
}