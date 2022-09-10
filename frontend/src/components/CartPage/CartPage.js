import "./cartpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import {fetchCart, getCart} from '../../store/cart'

function CartPage() {
   const { userId } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const storeCart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cart, setCart] = useState();

  useEffect(() => {
    if (!currentUser) navigate("/Cart");
  }, [currentUser]);

  console.log("current User", currentUser);
  console.log("cart", storeCart);

  // useEffect(() => {
  //   console.log("are we here?");
  //    dispatch(fetchCart(userId))
  // }, [userId]);

   useEffect(() => {
     dispatch(getCart());
     setCart(storeCart);
   }, [storeCart]);

  return (
    <>
  <div color="black">cart page</div>
  {storeCart && <div>{ storeCart.id}</div>}
    </>
  )
}

export default CartPage;
