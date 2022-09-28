import "./cartpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchCart, getCart} from '../../store/cart'
import CartItemSnapshot from "./CartItemSnapshot";
import Button from "../Buttons/Button";
import SuggestedItems from "../SuggestedItems";
import { getCurrentUser } from "../../store/session";

function CartPage() {

  const currentUser = useSelector(getCurrentUser);

  const navigate = useNavigate();
  if (!currentUser) navigate("/Cart");

  const dispatch = useDispatch();
  
  const storeCart = useSelector(getCart());


  const numItems = useSelector((state) => {
    if (!state.cart.numItems){
      return null;
    }else {
      return state.cart.numItems.numItems
    }
  });
  const [cart, setCart] = useState(storeCart);
  const [subtotal, setSubtotal] = useState('')



  let allItems = [];
  let subTotalV = 0;

  useEffect(()=>{
      if (storeCart) {
       let allItems = Object.values(storeCart);
        allItems.map((item)=>{
         subTotalV += parseFloat((((item.price * item.quantity)/100)*100).toFixed(2));
        })
        setSubtotal(subTotalV)
   

        setCart(storeCart)
      }
  },[numItems])



  useEffect(() => {
    if (currentUser){
     dispatch(fetchCart(currentUser.id))
    }
  }, [currentUser,cart]);
  
 
   
   if (!currentUser) return null;
   
  return (
    <>

      <div className="cart-page">
        <div>
          <div className="title-holder">
            <h1>{"SHOPPING BAG"}</h1>
            <span>{numItems} Items</span>
          </div>
          {numItems > 0 ? (
            <div className="snapshot-holder">
              {Object.values(storeCart).map((item, i) => {
                return <CartItemSnapshot key={i} item={item} />;
              })}
            </div>
          ) : (
            <div className="empty-holder">
              <h1>Looks like your cart is empty</h1>
              <Button localPath="/" color="black" name={"KEEP SHOPPING"} />
            </div>
          )}
        </div>

        <div className="order-summary">
          <h2>{"Order Summary"}</h2>
          <div>
            <span>Order Subtotal</span>
            <span>$ {subtotal}</span>
          </div>
          <div>
            <span>Estimated Shipping</span>
            <span>$ {(subtotal * 0.09).toFixed(2)}</span>
          </div>
          <div>
            <span>Total</span>
            <span>$ {parseFloat((subtotal * 0.09) + (subtotal)).toFixed(2)}</span>
          </div>
          <Button name={"CHECK OUT NOW"} />
        </div>
      </div>

     
      <SuggestedItems title={'You might be interested in'} collectionId={3}/>
    
    </>
  );

}

export default CartPage;




