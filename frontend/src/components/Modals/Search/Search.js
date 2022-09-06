import './search.css'
import "../modals.css"

import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Search() {
  const SEARCH_ID = 3
  const visible = useSelector((state) => state.ui.modals[SEARCH_ID].visible);
 

  useEffect(() => {
    if (visible) {
      const app = document.getElementById("app").childNodes;
      app[2].style.position = "fixed";
    } else {
      if (typeof document.getElementById("app") === null) {
      } else {
        const app = document.getElementById("app").childNodes;
      
        app[2].style.position = "absolute";
      }
    }
  }, [visible]);

  return (
    <>
      <div className={`search-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={SEARCH_ID} />
        <div className="search-modal-page"> SEARCH PAGE</div>
      </div>
    </>
  );
}


export default Search







