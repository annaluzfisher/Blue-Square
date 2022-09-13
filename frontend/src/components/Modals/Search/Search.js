import './search.css'
import "../modals.css"
import NavTierLabel from '../NavTierLabel/NavTierLabel';
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Search() {
  const SEARCH_ID = 3
  const visible = useSelector((state) => state.ui.modals[SEARCH_ID].visible);
 

  // useEffect(() => {
  //   if (visible) {
  //     const app = document.getElementById("app").childNodes;
  //     app[2].style.position = "fixed";
  //   } else {
  //     if (typeof document.getElementById("app") === null) {
  //     } else {
  //       const app = document.getElementById("app").childNodes;
      
  //       app[2].style.position = "absolute";
  //     }
  //   }
  // }, [visible]);
  
  if (!visible) return null;
  return (
    <>
      <div className={`search-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={SEARCH_ID} />
        <NavTierLabel name={'SEARCH'}/>
        <div className="search modal-page"> 

        </div>
      </div>
    </>
  );
}


export default Search







