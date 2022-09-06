import "./itemshowpage.css";
import { addItem } from "../../store/item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemShowPage() {
  const { itemId } = useParams();
  console.log(itemId);
  const item = useSelector((state) => state.items[itemId]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addItem(1));
  }, [itemId]);
  return (
    <div className="item-show-page">
      <div className="product-hero">
        <div className="item-scroller"></div>
        <div className="hero-img-container"></div>
        <div className="item-buy-box">{item.name}</div>
      </div>
      <div className="description"></div>
      <div className="reviews">REVIEWS</div>
    </div>
  );
}

export default ItemShowPage;
