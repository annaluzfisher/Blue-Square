import './search.css'
import "../modals.css"
import NavTierLabel from '../NavTierLabel/NavTierLabel';
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Search() {
  const SEARCH_ID = 3
  const visible = useSelector((state) => state.ui.modals[SEARCH_ID].visible);
  const [searchRequest, setSearchRequest] = useState('')
  const handleSearch = (e) =>{

  }

  const handleChange = (e) =>{
    setSearchRequest(e.target.value)
    console.log(searchRequest)
  }

  
  if (!visible) return null;
  return (
    <>
      <div className={`search-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={SEARCH_ID} />
        <NavTierLabel name={"SEARCH"} />
        <div className="search modal-page">
         
          <form className='search-form' onSubmit={(e)=>handleSearch(e)}>
            <input type="search" onChange={(e)=>handleChange(e)}></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
          
        </div>
      </div>
    </>
  );
}


export default Search







