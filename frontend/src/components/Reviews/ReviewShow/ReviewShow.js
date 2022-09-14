import { useSelector } from 'react-redux';
import './reviewshow.css'
import { useEffect, useState } from "react";
import { getReview } from '../../../store/reviews';
import Star from '../../Star';

function ReviewShow({reviewId}) {
  const [review, setReview] = useState();
const storeReview = useSelector(getReview(reviewId));
  const currentUser = useSelector((state) => state.session.user);

useEffect(()=>{
  setReview(storeReview)
  console.log(storeReview)
},[reviewId])
if(!review) return null;
  return (
    <div className="review-show-container">
      <div>
        <div className="r-b-holder">
          <div>
            <span>{review.userName || "Anonymous"}</span>{" "}
            {review.userId && <span>Verfied Buyer</span>}
          </div>
          <span>{review.createdAt.slice(0, 10)}</span>
        </div>
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((i) => {
            if (i <= review.rating) {
              return <Star filled={true} />;
            } else {
              return <Star filled={false} />;
            }
          })}
        </div>
        <h2>{review.title}</h2>
        <p>{review.content}</p>
        {/* {currentUser.id === review.userId ? (
          <div className="bottom-bar">
            <div>
              <i className="fa-regular fa-pen-to-square"></i>
              </div>
              <div>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
}

export default ReviewShow