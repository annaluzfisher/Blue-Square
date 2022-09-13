import "./lazyimage.css";
import { Link } from "react-router-dom";

function LazyImage({ imageUrl, text ,collectionId}) {
  return (
    <div className="lazy-image-wrapper">
      <div>
        <span>SHOP {text}</span>
        <Link to={`Category/${collectionId}`}>
          {" "}
          <img src={imageUrl} />
        </Link>
      </div>
    </div>
  );
}

export default LazyImage;
