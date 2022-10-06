import "./searchresults.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearResults,
  fetchSearch,
  getResults,
} from "../../store/search";
import ImageSnapshot from "../ItemShowPage/ImageSnapshot";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../Buttons/Button";

function SearchResults() {
  const results = useSelector(getResults);

  const navigate = useNavigate();
  const {query} = useParams()
  // if (query === undefined) navigate('/');

    const [searchRequest, setSearchRequest] = useState(query);
    const dispatch = useDispatch();

    useEffect(()=>{
      console.log('in use effect', results)
       if(results.length === 0) dispatch(fetchSearch(query))
    },[])
    const handleSearch = () => {
      dispatch(fetchSearch(searchRequest));
    };

    const handleChange = (e) => {
      setSearchRequest(e.target.value.toUpperCase());
    };

    const items = useSelector(getResults);
    useEffect(() => {
      if (searchRequest === "") {
        dispatch(clearResults());
      }
    }, [searchRequest]);


  return (
    <>
    
      <div className="bar-holder">
        <form className="search-form">
          <input type="search" placeholder="Search for a product" onChange={(e) => handleChange(e)}></input>
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleSearch}
          ></i>
        </form>
      </div>
      <div className="search-results-header">
        <h2>'{searchRequest.toUpperCase()}' product results</h2>
        <h2>{results?.length} Products</h2>
      </div>
      <div className="cat-page-images-container">
      {results?.map((result) => {
        return < ImageSnapshot key={result.id} itemId={result.id}/>
      })}
      </div>
    </>
  );
}

export default SearchResults;
