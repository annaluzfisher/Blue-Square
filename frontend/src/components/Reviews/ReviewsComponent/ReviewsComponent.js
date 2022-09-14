import { useEffect, useState } from "react";
import "./reviewscomponent.css";
import ReviewForm from "../../Forms/ReviewForm";

function ReviewsComponent( {item} ) {
  console.log("item in reviews", item);
 const  [numReviews, setNumReviews] = useState(0)
  const [formVisible , setFormVisible] = useState(false);
  useEffect(() => {
  if (item){
    if (typeof item.reviewIds === "undefined") {
      console.log("here");
      
    } else if (item.reviewIds.length > 0){
      console.log("SHOULD NOT BE HERE");
     setNumReviews(item.reviewIds.length);
    }}
  }, [item]);
  

  if (!item) return null;
  return (
    <>
      <div className="reviews-header">
        <h2>Reviews</h2>
      </div>
      <div className="ratings-header">
        <p>{item.average}</p>
        <div>
          <div className="stars-container-reviews">
            <i className="fa-regular fa-star"></i>{" "}
            <i className="fa-regular fa-star"></i>{" "}
            <i className="fa-regular fa-star"></i>{" "}
            <i className="fa-regular fa-star"></i>{" "}
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
        <span>{numReviews} Reviews</span>
        <div className="bottom-bar">
          <div>
            <i class="fa-regular fa-pen-to-square"></i>
            <span onClick={()=>setFormVisible(!formVisible)}>Write a Review</span>
          </div>
        </div>
      </div>
      {formVisible && <ReviewForm item={item.id}/> }
    </>
  );
}

export default ReviewsComponent;
