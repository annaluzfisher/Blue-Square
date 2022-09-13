import "./cartpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {fetchCart, getCart} from '../../store/cart'
import CartItemSnapshot from "./CartItemSnapshot";
import Button from "../Buttons/Button";

function CartPage() {
   const { userId } = useParams();
  const currentUser = useSelector((state) => state.session.user);

  const storeCart = useSelector(getCart());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cart, setCart] = useState(storeCart);
  const [subtotal, setSubtotal] = useState('')

  if (!currentUser) navigate("/Cart");
  let numItems =0;
  let allItems;
  let subTotalV = 0;

  useEffect(()=>{
      if (storeCart) {
        setSubtotal();
       
        allItems = Object.values(storeCart);
     
        allItems.map((item)=>{
         subTotalV += parseFloat((((item.price * item.quantity)/100)*100).toFixed(2));
        })
        console.log('the subtotal how many?',subTotalV)
        setSubtotal(subTotalV)
      }
  },[storeCart])



  useEffect(() => {
    // console.log("are we here?");
    if (currentUser){
     dispatch(fetchCart(currentUser.id))
    }
  }, [userId]);
  
  useEffect(() => { 
    setCart(storeCart);
    if(storeCart){
           allItems = Object.values(storeCart).length;
           numItems = allItems.length;
    }
   }, [cart,storeCart, currentUser]);
if (!cart) return null;
// if (cart.items === 'empty') return null;
  return (
    <>
      <div className="cart-page">
        <div>
          <div className="title-holder">
            <h1>{"SHOPPING BAG"}</h1>
            <span>{Object.values(storeCart).length} Items</span>
          </div>
      
         <div className="snapshot-holder">
            {Object.values(cart).map((item, i) => {
              return <CartItemSnapshot key={i} item={item} />;
            })}
          </div> : 
          <h1>Looks like your cart is empty</h1>
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
            <span>$ {(subtotal * 0.09).toFixed(2)+parseFloat(subtotal)}</span>
          </div>
          <Button name={'CHECK OUT NOW'}/>
        </div>
      </div>
    </>
  );

}

export default CartPage;
