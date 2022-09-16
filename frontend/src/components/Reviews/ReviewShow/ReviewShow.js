
import './reviewshow.css'
import { useEffect, useState } from "react";
import { deleteReview, getReview } from '../../../store/reviews';
import Star from '../../Star';
import { useDispatch, useSelector } from "react-redux";


function ReviewShow({reviewId}) {
  const [review, setReview] = useState();
const storeReview = useSelector(getReview(reviewId));
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

useEffect(()=>{
  setReview(storeReview)

},[reviewId])
if(!review) return null;
  return (
    <div className="review-show-container">
      <div>
        <div className="r-b-holder">
          <div>
            <span>{review.name || "Anonymous"}</span>{" "}
            {review.userId && <span>Verfied Buyer</span>}
          </div>
          <span>{review?.createdAt.slice(0, 10)}</span>
        </div>
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((i) => {
            if (i <= review.rating) {
              return <Star key={i} filled={true} />;
            } else {
              return <Star key={i} filled={false} />;
            }
          })}
        </div>
        <h2>{review.title}</h2>
        <p>{review.content}</p>
       
      </div>
    </div>
  );
}

export default ReviewShow