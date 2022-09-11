import './addedtobag.css';
import {useEffect} from 'react';
import "../modals.css";
import { useSelector } from "react-redux";
import ModalNavBar from '../ModalNavBar/ModalNavBar';

function AddedToBag() {
  const ADDED_ID = 4;
  const visible = useSelector(
    (state) => state.ui.modals[ADDED_ID].visible
  );
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
    <div className={`added-modal modal ${visible ? "" : "hidden"}`}>
      <ModalNavBar modalId={ADDED_ID} />
      <div>Added to bag</div>
    </div>
  );
}

export default AddedToBag;