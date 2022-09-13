import './addedtobag.css';
import {useEffect, useState} from 'react';
import "../modals.css";
import { useSelector ,useDispatch} from "react-redux";
import ModalNavBar from '../ModalNavBar/ModalNavBar';
import {useLocation , useParams } from 'react-router-dom'
import { getCart } from '../../../store/cart';
import { getItem, fetchItem } from '../../../store/item';


function AddedToBag() {
  const ADDED_ID = 4;
  const visible = useSelector(
    (state) => state.ui.modals[ADDED_ID].visible
  );
    const dispatch = useDispatch();
    const [item, setItem] = useState({ name: " ", description: " " });
    
    const cart = useSelector(getCart())
    const location = useLocation();
    let itemId = 0;
    useEffect(()=>{
      let sliceIndex = location.pathname.lastIndexOf('/')
      itemId = location.pathname.slice(sliceIndex+1)
    },[cart])
    const storeItem = useSelector(getItem(itemId));
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


    useEffect(() => {
      dispatch(fetchItem(itemId));
    }, [itemId]);
    //two use effects

    useEffect(() => {
      setItem(storeItem);
    }, [storeItem]);

  return (
    <div className={`added-modal modal ${visible ? "" : "hidden"}`}>
      <ModalNavBar modalId={ADDED_ID} />
      <div>AddedToBag</div>
      
    </div>
  );
}

export default AddedToBag;