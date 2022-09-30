import "./addedtobag.css";
import { useEffect, useState } from "react";
import "../modals.css";
import { useSelector, useDispatch } from "react-redux";
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import { getCart,fetchCart } from "../../../store/cart";
import { getItem, fetchItem } from "../../../store/item";
import CartItemSnapshot from "../../CartPage/CartItemSnapshot";
import SuggestedItems from "../../SuggestedItems";
import Button from "../../Buttons/Button";

function AddedToBag() {


  const{ itemId } = useParams();
   const ADDED_ID = 4;
   const visible = useSelector((state) => state.ui.modals[ADDED_ID].visible);

   const currentUser = useSelector((state) => state.session.user);

   const storeItem = useSelector(getItem(itemId));


   const dispatch = useDispatch();

   const storeCart = useSelector(getCart());

   const numItems = useSelector((state) => {
     if (!state.cart.numItems) {
       return null;
     } else {
       return state.cart.numItems.numItems;
     }
   });
   const [cart, setCart] = useState(storeCart);
   const [subtotal, setSubtotal] = useState("");
   const [shipping, setShipping] = useState();
   const [total, setTotal] = useState();

   let allItems = [];
   let subTotalV = 0;

   useEffect(() => {
     if (storeCart) {
       let allItems = Object.values(storeCart);
       allItems.map((item) => {
         subTotalV += parseFloat(
           (((item.price * item.quantity) / 100) * 100).toFixed(2)
         );
       });
       setSubtotal(subTotalV);
       setShipping((subtotal * 0.09).toFixed(2));

       setCart(storeCart);
     }
   }, [numItems]);

   useEffect(() => {
     if (currentUser) {
       dispatch(fetchCart(currentUser?.id));
     }
   }, [currentUser, cart]);

   useEffect(() => {
     setCart(storeCart);
   }, [numItems, currentUser]);


const [item, setItem] = useState(storeItem);
const [colId, setColId] = useState();




useEffect(() => {
  setItem(storeItem);
  if (storeItem) {
    let id =
      storeItem.collections[
        Math.floor(Math.random() * storeItem.collections.length)
      ];
    setColId(id);
  
  }
}, [storeItem, itemId]);

if (!visible) return null;
if (!currentUser) return null;





  return (
    <>
      <div className={`added-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={ADDED_ID} extra={true} subtotal={subtotal}/>
        <div className="added-container">
          <div className="left-side">
            <h1 className="ad-title">Added to Bag</h1>

            <div className="a-hero">
              <img src={item.imageUrl} />
            </div>
            <div>{item?.name}</div>
            <div className="buttons-container-added">
              <Button localPath={"/"} name={'KEEP SHOPPING'} primary={'secondary'}/> 
              <Button localPath={'/Cart'} name={'CHECKOUT'} />
            </div>
          </div>

          <div className="right-side">
            <h2> You might be interested in </h2>
            <p>Take a peek at some of the favourites at Blue Square, tried and true pieces of gear we use all the time.</p>
            <SuggestedItems collectionId={3}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddedToBag;
