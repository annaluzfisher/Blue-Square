import "./lazyimage.css";

function LazyImage({ imgUrl, text }) {
  return (
    <div className="lazy-image-wrapper">
      <div>
        <span>SHOP {text}</span>
        <img />
      </div>
    </div>
  );
}

export default LazyImage;
