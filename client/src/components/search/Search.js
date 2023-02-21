import './Search.css'
import List from "../list/List";
import { useContext, useState } from 'react';
import useGetBreeds from '../../use/useGetBreeds';
import MostSearchedBreeds from '../MostSearchedBreeds/MostSearchedBreeds';
import { LoadingContext } from '../../context/context';
import Loader from '../loader/Loader';


export default function Search({ handleSelect }) {

    const [searchText, setSearchText] = useState("");
    const [showMostSearched, setshowMostSearched] = useState(true);
    const setLoading = useContext(LoadingContext);

    const { loading, breeds } = useGetBreeds(setLoading);

    function updateSearchText(event) {
        event.preventDefault();
        setSearchText(event.target.value)
      }
  
      function handleItemSelect(id) {
        setSearchText("");
        setshowMostSearched(false);
        handleSelect(id);
      }

    const filteredList = breeds ? breeds.filter(({name}) => name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) : []

    return (
      <>
        <div className="search">
            { loading && <Loader />} 
            <input value={searchText} onChange={updateSearchText} placeholder="Search"/>
            { filteredList.length > 0 && searchText && <List items={filteredList.map(({name, id}) => ({name, id}))} handleSelect={handleItemSelect}/> }
        </div>
        <div>
          { showMostSearched && <MostSearchedBreeds breeds={breeds} handleSelect={handleSelect}/> }
        </div>
      </>
    )
}