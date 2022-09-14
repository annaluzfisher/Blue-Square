import { useEffect, useState } from "react";
import "./reviewscomponent.css";
import ReviewForm from "../../Forms/ReviewForm";
import ThemeComponenet from "../../ThemeComponent/ThemeComponenet";
import ReviewShow from "../ReviewShow/ReviewShow";
import Star from "../../Star";
import { useSelector } from "react-redux";
// import  Stars  from "../../Star";
import { getReviews } from "../../../store/reviews";

function ReviewsComponent({ item }) {
  const [numReviews, setNumReviews] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  const storeReviews = useSelector(getReviews(item.id));
  const [edit, setEdit] = useState(false);
  const [editableReview, setEditableReview] = useState();

  useEffect(() => {
    if (item) {
      if (typeof item.reviewIds === "undefined") {
      } else if (item.reviewIds.length > 0) {
        setNumReviews(item.reviewIds.length);
      }
    }
  }, [item]);
// let reviewIds = []
//   useEffect(()=>{
//     if ( storeReviews) {
//       storeReviews.forEach(review =>{
//         reviewIds.push(review.id)
//         console.log(review)
//         console.log(review.id)
//       })
//     }
//   },[currentUser,numReviews])
//   console.log(reviewIds)
  // useEffect(() => {
  //   if (!storeReviews) return {};
  //   if (storeReviews && currentUser) {
  //     setEdit(false);
  //     console.log("in the map", storeReviews);
  //     storeReviews.map((review) => {
  //       console.log("review", review);
  //       if (review.userId && review.userId === currentUser.id) {
  //         setEditableReview(review);
  //         setEdit(true);
  //       }
  //     });
  //   }

  // }, [currentUser,storeReviews]);

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
            {[1, 2, 3, 4, 5].map((i) => {
              if (i <= item.average) {
                return <Star filled={true} />;
              } else {
                return <Star filled={false} />;
              }
            })}
          </div>
        </div>
        <span>{numReviews} Reviews</span>
        <div className="bottom-bar">
          <div>
            <i className="fa-regular fa-pen-to-square"></i>
            {!edit ? (
              <span onClick={() => setFormVisible(!formVisible)}>
                Write a Review
              </span>
            ) : (
              <span onClick={() => setFormVisible(!formVisible)}>
                Edit Review
              </span>
            )}
          </div>
        </div>
      </div>
      {formVisible && (
        <ReviewForm item={item.id} review={editableReview} patch={edit} />
      )}
      {item.reviewIds &&
        item.reviewIds.map((reviewId) => {
          return <ReviewShow reviewId={reviewId} />;
        })}
      <ThemeComponenet />
    </>
  );
}

export default ReviewsComponent;
