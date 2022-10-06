import './search.css'
import "../modals.css"
import NavTierLabel from '../NavTierLabel/NavTierLabel';
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSearch } from '../../../store/search';

function Search() {
  const SEARCH_ID = 3
  const visible = useSelector((state) => state.ui.modals[SEARCH_ID].visible);
  const [searchRequest, setSearchRequest] = useState('')
  const dispatch = useDispatch();
  
  const handleSearch = () =>{
    console.log('WHAAAT IS THE SEARCH REQUEST',searchRequest)
   dispatch(fetchSearch(searchRequest))
   
  }

  const handleChange = (e) =>{
    setSearchRequest(e.target.value)
  }

  
  if (!visible) return null;
  return (
    <>
      <div className={`search-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={SEARCH_ID} />
        <NavTierLabel name={"SEARCH"} />
        <div className="search modal-page">
          <form className="search-form" onSubmit={handleSearch}>
            <input type="search" onChange={(e) => handleChange(e)}></input>
            <input type='submit' value={'search'}>
              {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            </input>
          </form>
        </div>
      </div>
    </>
  );
}


export default Search







