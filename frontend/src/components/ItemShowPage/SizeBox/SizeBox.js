import React from 'react';
import './sizebox.css'
import { useEffect, useState} from 'react'
import Button from '../../Buttons/Button';

function SizeBox({item}) {
  const  [quantity, setQuantity] = useState('1');
   const [size, setSize] = useState("");


  useEffect(()=>{
        let input = parseInt(quantity);
           if (input < 1) input = 1;
           else if(!input) input = '';
          setQuantity(parseInt(input));
   
  },[quantity])

  const adjustSize = (e,newSize) =>{
    setSize(newSize);
    if(e.currenTarget) e.currentTarget.style={ backgroundColor: 'black', color: 'white'};
  
      console.log("size",size);
      console.log('target',e.currentTarget)
      console.log("target value", e.target.value);
  }


  const addToCart= (e)=>{
    e.preventDefault();
  //need to dispatch addCartItem
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
            <Button type="submit" name="ADD TO BAG"></Button>
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

export default SizeBox