import "./itemshowpage.css";
import { fetchItem, getItem } from "../../store/item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function ItemShowPage() {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const fetchedItem = useSelector(getItem(itemId));
  const [item, setItem] = useState({name:' ',description:' '});

  useEffect(() => {
    dispatch(fetchItem(itemId));
    setItem(fetchedItem);
  }, [item]);
  //two use effects 

  

  console.log('item',item)
  return (
    <div className="item-show-page">
      <div className="product-hero">
        <div className="item-scroller"></div>
        <div className="hero-img-container"></div>
        <div className="item-buy-box">{item? item.name : ''}</div>
      </div>
      <div className="description"></div>
      <div className="reviews">REVIEWS</div>
    </div> 
  );
}

export default ItemShowPage;
