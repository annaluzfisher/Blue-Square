import './addedtobag.css';
import {useEffect, useState} from 'react';
import "../modals.css";
import { useSelector ,useDispatch} from "react-redux";
import ModalNavBar from '../ModalNavBar/ModalNavBar';
import {useLocation } from 'react-router-dom'
import { getCart } from '../../../store/cart';
import { getItem, fetchItem } from '../../../store/item';
import { getCategories } from '../../../store/collections';


function AddedToBag() {
  const ADDED_ID = 4;
  const visible = useSelector(
    (state) => state.ui.modals[ADDED_ID].visible
  );
    const dispatch = useDispatch();
    const [item, setItem] = useState();
    const cart = useSelector(getCart())
    const cat = useSelector(getCategories)
    const location = useLocation();
    let itemId;
    const storeItem = useSelector(getItem(itemId));

    useEffect(()=>{
      let sliceIndex = location.pathname.lastIndexOf('/')
      itemId = location.pathname.slice(sliceIndex+1)
      console.log(itemId)
      dispatch(fetchItem(itemId))
      setItem(storeItem)
 
    },[location,itemId,storeItem,item]) 


    useEffect(() => {
      if (visible) {
        const app = document.getElementById("app").childNodes;
        app[2].style.position = "fixed";
        setItem(storeItem);
      } else {
        if (typeof document.getElementById("app") === null) {
          setItem(storeItem);
        } else {
          const app = document.getElementById("app").childNodes;

          app[2].style.position = "absolute";
          setItem(storeItem);
        }
      }
    }, [visible]);



if (!item) return console.log('how many indefined');
  return (
    <div className={`added-modal modal ${visible ? "" : "hidden"}`}>
    <ModalNavBar modalId={ADDED_ID} /> 
      <div className='a-hero-img-container'>
     <img scr={item.name}/> 
      </div>
      <div>AddedToBag</div>
      
    </div> 
  );
}

export default AddedToBag;