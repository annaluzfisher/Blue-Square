import "./cartpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {fetchCart, getCart} from '../../store/cart'
import CartItemSnapshot from "./CartItemSnapshot";
import Button from "../Buttons/Button";
import ThemeComponenet from "../ThemeComponent/ThemeComponenet";

function CartPage() {
   const { userId } = useParams();
  const currentUser = useSelector((state) => state.session.user);

  const navigate = useNavigate();
  if (!currentUser) navigate("/Cart");

  const dispatch = useDispatch();
  
  const storeCart = useSelector(getCart());

  // if (!storeCart){
  //  dispatch(fetchCart(currentUser.id));
  // }
    

  const numItems = useSelector((state) => {
    if (!state.cart.numItems){
      return null;
    }else {
      return state.cart.numItems.numItems
    }
  });
  const [cart, setCart] = useState(storeCart);
  const [subtotal, setSubtotal] = useState('')
  const [shipping, setShipping] = useState();
  const [total, setTotal ] = useState();


console.log('numItems', numItems)
  let allItems = [];
  let subTotalV = 0;

  useEffect(()=>{
      if (storeCart) {
       let allItems = Object.values(storeCart);
        allItems.map((item)=>{
         subTotalV += parseFloat((((item.price * item.quantity)/100)*100).toFixed(2));
        })
        setSubtotal(subTotalV)
        setShipping((subtotal * 0.09).toFixed(2))
        // console.log('math', subtotal, shipping)
        // setTotal(parseFloat((subtotal+shipping).toFixed(2)))
        setCart(storeCart)
      }
  },[numItems])

//need to check length in some way 

  useEffect(() => {
    if (currentUser){
     dispatch(fetchCart(currentUser.id))
    }
  }, [currentUser,cart]);
  
  useEffect(() => { 
    setCart(storeCart);

   }, [numItems, currentUser]);

   // if (cart.items === 'empty') return null;
   
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
            <span>$ {(subtotal * 0.09).toFixed(2) + parseFloat(subtotal)}</span>
          </div>
          <Button name={"CHECK OUT NOW"} />
        </div>
      </div>

      <h1 className="theme-title">You might be interested in</h1>
      <ThemeComponenet />
    </>
  );

}

export default CartPage;




//  <div className="order-summary">
//           <h2>{"Order Summary"}</h2>
//           <div>
//             <span>Order Subtotal</span>
//             <span>$ {subtotal}</span>
//           </div>
//           <div>
//             <span>Estimated Shipping</span>
//             <span>$ {(subtotal * 0.09).toFixed(2)}</span>
//           </div>
//           <div>
//             <span>Total</span>
//             <span>$ {(subtotal * 0.09).toFixed(2)+parseFloat(subtotal)}</span>
//           </div>
//           <Button name={'CHECK OUT NOW'}/>
//         </div>
   