import './Search.css'
import List from "../list/List";
import { useContext, useState } from 'react';
import useGetBreeds from '../../use/useGetBreeds';
import { LoadingContext } from '../../context/loading';


export default function Search({ handleSelect }) {

    const [searchText, setSearchText] = useState("");
    const setLoading = useContext(LoadingContext);

    const { breeds } = useGetBreeds(setLoading);

    function updateSearchText(event) {
        event.preventDefault();
        setSearchText(event.target.value)
      }
  
      function handleItemSelect(id) {
        setSearchText("");
        handleSelect(id);
      }

    const filteredList = breeds ? breeds.filter(({name}) => name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) : []

    return (
        <div className="search"> 
            <input value={searchText} onChange={updateSearchText}/>
            { filteredList.length > 0 && searchText && <List items={filteredList.map(({name, id}) => ({name, id}))} handleSelect={handleItemSelect}/> }
        </div>
    )
}