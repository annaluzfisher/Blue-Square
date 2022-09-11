import "./cartpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import {fetchCart, getCart} from '../../store/cart'

function CartPage() {
   const { userId } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const cartId = useSelector((state) => state.session.user.cart);
  const storeCart = useSelector(getCart());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cart, setCart] = useState();


    if (!currentUser) navigate("/Cart");


  // console.log("currentUser ffrom state", currentUser);
  // console.log("cart id of user",cartId);
  // console.log('store cart should be an id and an empty array', storeCart)

  useEffect(() => {
    // console.log("are we here?");
    if (currentUser){

     dispatch(fetchCart(currentUser.id, cartId))
    }
  }, [currentUser]);

   useEffect(() => { 
          console.log("how many times we re-rendering", cart);
     dispatch(getCart());
     setCart(storeCart);
   }, [cart,storeCart, currentUser]);
if (!cart) return null;
  return (
    <>
      <div className="cart-page">
        <div color="black">cart page</div>
        {cart && <div>{storeCart.cart.id}</div> }
      </div>
    </>
  );

}

export default CartPage;
