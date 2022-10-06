import "./searchresults.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResults } from "../../store/search";

function SearchResults() {
  const results = useSelector(getResults);

  return (
    <>
      <div>SearchResults</div>
      {results?.map((result) => {
        return <h1>{result.name}</h1>;
      })}
    </>
  );
}

export default SearchResults;
