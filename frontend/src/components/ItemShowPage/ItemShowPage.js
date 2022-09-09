import "./itemshowpage.css";
import { fetchItem, getItem } from "../../store/item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import SizeBox from "./SizeBox/SizeBox";

function ItemShowPage() {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const storeItem = useSelector(getItem(itemId));
  const [item, setItem] = useState({name:' ',description:' '});

  useEffect(() => {
    dispatch(fetchItem(itemId));
  }, [itemId]);
  //two use effects 

  useEffect(() => {
    dispatch(getItem(itemId));
    setItem(storeItem);
  }, [storeItem]);

  


  return (
    <>
      {item && (
        <div className="item-show-page">
          <div className="spacer"></div>
          <div className="product-hero">
            <div className="item-scroller"></div>
            <div className="hero-img-container">
              <img src={item.imageUrl} />
            </div>
            <div className="item-buy-box">
              <div>
                {item.new && <div>NEW</div>}
                <span> {item.name}</span>
                {item.size ? <SizeBox item={item} /> : <></>}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="description"></div>
      <div className="reviews">REVIEWS</div>
    </>
  );
}

export default ItemShowPage;

//revierws will have out of 5 stars
// product show will fetch each item we will add key value pair to j builder avg rating and num ratings
// product model helper page. 

