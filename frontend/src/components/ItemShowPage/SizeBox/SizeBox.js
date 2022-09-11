import React from 'react';
import './sizebox.css'
import { useEffect, useState} from 'react'
import Button from '../../Buttons/Button';
import { toggleModal } from '../../../store/ui';
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../../store/cart';

function SizeBox({item}) {
  const dispatch = useDispatch();
  const  [quantity, setQuantity] = useState('1');
   const [size, setSize] = useState("");
  //  const currentUser = useSelector((state) => state.session.user);
   const [itemPayload, setItemPayload] = useState({itemId: item.id, userId: currentUser.id, cartId: currentUser.cart})
  const ADDED_ID = 4

  useEffect(()=>{
        let input = parseInt(quantity);
           if (input < 1) input = 1;
           else if(!input) input = '';
          setQuantity(parseInt(input));
      setItemPayload({...itemPayload,size : size, quantity: quantity});
  },[quantity,size])

  const adjustSize = (e,newSize) =>{
    setSize(newSize);
    if(e.currenTarget) e.currentTarget.style={ backgroundColor: 'black', color: 'white'};
  
      // console.log("size",size);
      // console.log('target',e.currentTarget)
      // console.log("target value", e.target.value);
  }
 


  const addToCart= (e)=>{
    e.preventDefault();
   dispatch(toggleModal(ADDED_ID));

    console.log('item_payload',itemPayload)
 dispatch(addCartItem(itemPayload))
  }
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
            <Button type="submit" name="ADD TO BAG" ></Button>
          ) : (
            <Button
              type="submit"
              name="SELECT A SIZE"
              disabled="true"
              id="holder"
            ></Button>
          )}
        </div>
        <span>----------------------------------------------------------</span>
      </div>
    </form>
  );
}

export default SizeBox;