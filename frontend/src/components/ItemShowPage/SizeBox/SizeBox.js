import React from "react";
import "./sizebox.css";
import { useEffect, useState } from "react";
import Button from "../../Buttons/Button";
import { toggleModal } from "../../../store/ui";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, fetchCart } from "../../../store/cart";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../store/session";

function SizeBox({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("1");
  const [size, setSize] = useState();
    // const storeCart = useSelector((state) => state.cart);

  const currentUser = useSelector((state) => state.session.user);

  const [itemPayload, setItemPayload] = useState({});
  const ADDED_ID = 4;

  // console.log('currentUser', currentUser)

  useEffect(() => {
    let input = parseInt(quantity);
    if (input < 1) input = 1;
    else if (!input) input = "";
    setQuantity(parseInt(input));
    setSize(size);
    // setItemPayload({
    //   itemId: item.id,
    //   userId: currentUser.id,
    //   cartId: currentUser.cart,
    //   size: size,
    //   quantity: quantity,
    // });
  }, [quantity, size]);

  const adjustSize = (e, newSize) => {
    setSize(newSize);
    if (e.currentTarget)
      e.currentTarget.style = { backgroundColor: "black", color: "white" };

    // console.log("size",size);
    // console.log('target',e.currentTarget)
    // console.log("target value", e.target.value);
  };

  useEffect(() => {
    if (currentUser) {
      setItemPayload({
        itemId: item.id,
        cartId: currentUser.cart,
        size: size,
        quantity: quantity,
      });
    }

  }, [quantity, size]);

  const addToCart = (e) => {
    e.preventDefault();

    if (!currentUser) {
      navigate("/Cart");
      console.log("why");
    } else {
      dispatch(toggleModal(ADDED_ID));
  

      console.log("item_payload", itemPayload);
      dispatch(addCartItem(itemPayload));
    }
  };
  return (
    <form className="size-box-form" onSubmit={addToCart}>
      <div className="size-box">
        <span>
          Size: -------------------------------------------------------
        </span>
        <div className="sizes-container">
          <label>
            {" "}
            <span>XS</span>
            <input type="radio" name="size" value={size} />
          </label>
          <label onClick={(e) => adjustSize(e, "S")}>
            {" "}
            <span>S</span>
            <input type="radio" name="size" value={size} />
          </label>
          <label onClick={(e) => adjustSize(e, "M")}>
            {" "}
            <span>M</span>
            <input type="radio" name="size" value={size} />
          </label>
          <label onClick={(e) => adjustSize(e, "L")}>
            {" "}
            <span>L</span>
            <input type="radio" name="size" value={size} />
          </label>
          <label onClick={(e) => adjustSize(e, "XL")}>
            {" "}
            <span>XL</span>
            <input type="radio" name="size" value={size} />
          </label>
          <label onClick={(e) => adjustSize(e, "XXL")}>
            <span>XXL</span>
            <input type="radio" name="size" value={size} />
          </label>
          {/* <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div> */}
        </div>
        <span>----------------------------------------------------------</span>
        <div className="sb-price">
          <span>$ {item.price}</span> <span>USD</span>
        </div>
        <div className="sb-button-container">
          <div className="sb-qty">
            <label>
              QTY
              <input
                type="number"
                value={quantity > 0 ? `${quantity}` : ""}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>
          {size ? (
            <Button type="submit" name="ADD TO BAG"></Button>
          ) : (
            <div className="button" id='holder'>
            SELECT A SIZE
 
            </div>
          )}
        </div>
        <span>----------------------------------------------------------</span>
      </div>
    </form>
  );
}

export default SizeBox;
