import "./addedtobag.css";
import { useEffect, useState } from "react";
import "../modals.css";
import { useSelector, useDispatch } from "react-redux";
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { NavLink, useLocation } from "react-router-dom";
import { getCart } from "../../../store/cart";
import { getItem, fetchItem } from "../../../store/item";
import { getCategories } from "../../../store/collections";

function AddedToBag() {
  const ADDED_ID = 4;
  const visible = useSelector((state) => state.ui.modals[ADDED_ID].visible);
  const dispatch = useDispatch();
  const cart = useSelector(getCart());
  const location = useLocation();
  let itemId = 0;
  const storeItem = useSelector(getItem(itemId));
  const [item, setItem] = useState(storeItem);

  const numItems = useSelector((state) => {
    if (!state.cart.numItems) {
      return null;
    } else {
      return state.cart.numItems.numItems;
    }
  });

  useEffect(() => {
    let sliceIndex = location.pathname.lastIndexOf("/");
    itemId = location.pathname.slice(sliceIndex + 1);
    console.log("id in modal", itemId);
    dispatch(fetchItem(itemId));
    setItem(storeItem);
  }, [location.pathname, visible,numItems]);

  useEffect(() => {
    setItem(storeItem);
  }, [location.pathname, visible, numItems]);

  // change on location.pathname. when the id changes. get the item and ren
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
  // if (!item) return (
  //   <div>loading</div>
  // ) 
  // if (item)
  return (
    <div className={`added-modal modal ${visible ? "" : "hidden"}`}>
      <ModalNavBar modalId={ADDED_ID} />
      <div className="a-hero-img-container">
        {/* <img scr={item.imageUrl} /> */}
      </div>
      <div>AddedToBag</div>
      {/* <div>{item.name}</div> */}
    </div>
  );
}

export default AddedToBag;
