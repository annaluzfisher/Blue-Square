import './itemshowpage.css'
import { addItem } from '../../store/item';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


function ItemShowPage() {
const items = useSelector((state)=> state.items) 
const dispatch = useDispatch();
useEffect(()=> {
  dispatch(addItem(1));
  console.log(items)
},[])
return (
    <div className="item-show-page">
      <div className="product-hero">
        <div className="item-scroller"></div>
        <div className="hero-img-container"></div>
        <div className="item-buy-box"></div>
      </div>
      <div className='description'>

      </div>
      <div className='reviews'>REVIEWS</div>
    </div>
  );
}

export default ItemShowPage