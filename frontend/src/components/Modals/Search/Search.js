import './Search.css'
import "../modals.css"
import "../ModalNavBar/ModalNavBar";
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Search() {
  SEARCH_ID = 3
  const visible = useSelector((state) => state.ui.modals[SEARCH_ID].visible);
 

  useEffect(() => {
    if (visible) {
      const app = document.getElementById("app").childNodes;
      app[2].style.position = "fixed";
    } else {
      if (typeof document.getElementById("app") === null) {
      } else {
        const app = document.getElementById("app").childNodes;
        console.log("here", app);
        app[2].style.position = "absolute";
      }
    }
  }, [visible]);

  return (
    <>
      <div className={`search-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={SEARCH_ID} />
        <div className="shop-modal-page"> SEARCH PAGE</div>
      </div>
    </>
  );
}


export default Search







