import { useEffect, useState } from "react";
import "./reviewscomponent.css";
import ReviewForm from "../../Forms/ReviewForm";
import ThemeComponenet from "../../ThemeComponent/ThemeComponenet";
import ReviewShow from "../ReviewShow/ReviewShow";
import Star from "../../Star";
import { useSelector } from "react-redux";


function ReviewsComponent({ item }) {
  const [numReviews, setNumReviews] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  const storeReviews = useSelector((state)=> {
    if (!state) return null;
    if (!state.reviews) return null;
    else {
      return state.reviews
    }
  })
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

  useEffect(()=>{

    if (typeof item.userIds !== 'undefined' && currentUser){
     if ((item.userIds).includes(currentUser.id)){
     setEdit(true)
     }
    }
  },[item.userIds])

    useEffect(() => {
        if (typeof storeReviews === "undefined" || !currentUser) {
            console.log('store Reviews',storeReviews)
        }else{
         Object.values(storeReviews).map((review=>{
         if (review.userId === currentUser.id) setEditableReview(review);
         }))
        }
    }, [item.reviewIds,numReviews]);
  
 

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
        Object.values(storeReviews).map((review) => {
          return <ReviewShow reviewId={review.id} />;
        })}
      <ThemeComponenet />
    </>
  );
}

export default ReviewsComponent;
