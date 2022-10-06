import './search.css'
import "../modals.css"
import NavTierLabel from '../NavTierLabel/NavTierLabel';
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearResults, fetchSearch, getResults, fetchSearch5 } from '../../../store/search';
import ImageSnapshot from '../../ItemShowPage/ImageSnapshot';
import { useNavigate } from 'react-router-dom'
import { toggleModal } from '../../../store/ui';
import SearchResults from '../../SearchResults/SearchResults';

function Search() {
  const SEARCH_ID = 3
  const visible = useSelector((state) => state.ui.modals[SEARCH_ID].visible);
  const [searchRequest, setSearchRequest] = useState('')
    const [options, setOptions] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSearch = () =>{
        dispatch(fetchSearch(searchRequest));
      dispatch(toggleModal(SEARCH_ID))
      navigate("/Search");
  }

  const handleClick = () =>{
        dispatch(fetchSearch(searchRequest));
      dispatch(toggleModal(SEARCH_ID));
      navigate("/Search");
  }

  const handleChange = (e) =>{
    setSearchRequest((e.target.value).toUpperCase())
    dispatch(fetchSearch5(e.target.value))
  }

  const items = useSelector(getResults)
  useEffect(()=>{
    if(searchRequest === ''){
      dispatch(clearResults())
    }
  },[searchRequest])

  useEffect(()=>{
    setOptions(items)
  },[items])

  if (!visible) return null;
  return (
    <>
      <div className={`search-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={SEARCH_ID} />
        <NavTierLabel name={"SUGGESTIONS"} />
        <div className="search modal-page">
          <form className="search-form" onSubmit={handleSearch}>
            <input type="search" onChange={(e) => handleChange(e)}></input>
            <input type="submit" value={"search"}>
              {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            </input>
          </form>
        </div>
        <div className="suggestions">
          {searchRequest && <h1>'{searchRequest}'</h1>}
          <div className="logout-button" onClick={handleClick}>
            <span>shop all</span>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div>
            {options ? (
              options?.map((item) => {
                return <ImageSnapshot itemId={item.id} />;
              })
            ) : (
              <span>search for something </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


export default Search







