import './imagesnapshot.css';
import { fetchItem, getItem } from "../../../store/item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function ImageSnapshot({itemId}) {

  const dispatch = useDispatch();
  const storeItem = useSelector(getItem(itemId));
  const [item, setItem] = useState();

  useEffect(() => {
    dispatch(fetchItem(itemId));
  }, [itemId]);
  //two use effects

  useEffect(() => {
    dispatch(getItem(itemId));
    setItem(storeItem);
  }, [storeItem]);

  return (
    <Link to={`/Items/${itemId}`}>
      {" "}
      <div className="snapshot-container">
  
          <div className="snapshot-image-container">
            {/* <div> */}
              <img src={item ? item.imageUrl : ""} />
            {/* </div> */}
          </div>
        <div className="lower-snapshot-container">
          <div>{item ? item.name : ""}</div>
          <div>$ {item ? item.price : ""}</div>
          <div className="star-ratings-container">
            <div className="stars-container">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="line"></div>
          </div>
        </div>

        </div>
    </Link>
  );
}

export default ImageSnapshot