import { useEffect, useState, useRef } from "react";
import "./reviewscomponent.css";
import ReviewForm from "../../Forms/ReviewForm";

import ReviewShow from "../ReviewShow/ReviewShow";
import Star from "../../Star";
import { useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getItem } from "../../../store/item";

function ReviewsComponent({item}) {
  const { itemId } = useParams();
    const storeItem = useSelector(getItem(itemId));
    // const [item, setItem] = useState(item);
  const [numReviews, setNumReviews] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const edit = useRef(false)
  const currentUser = useSelector((state) => state.session.user);
  const storeReviews = useSelector((state) => {
    if (!state) return null;
    if (!state.reviews) return null;
    else {
      return state.reviews;
    }
  });
  // const [edit, setEdit] = useState(false);
  const [editableReview, setEditableReview] = useState();
  const [reviews, setReviews] = useState();



  useEffect(() => {
  //  if (storeItem) setItem(storeItem);
      if (item.userIds?.includes(currentUser?.id)) {
        edit.current = true
    } else {
      setEditableReview()
      edit.current = false
    }
  }, [itemId, currentUser,storeItem, numReviews,formVisible]);

  useEffect(() => {
    if (typeof storeReviews === "undefined" || !currentUser) {
    } else {
      setReviews(storeReviews)
      Object.values(storeReviews).map((review) => {
        if (review.userId === currentUser.id) setEditableReview(review);
      });
    }
  }, [item.reviewIds, numReviews]);

  useEffect(() => {
    setReviews(storeReviews);

  }, [storeReviews, itemId, numReviews]);

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
        <span>{item.reviewIds?.length} Reviews</span>
        <div className="bottom-bar">
          <div
            onClick={() =>
              formVisible ? setFormVisible(false) : setFormVisible(true)
            }
          >
            <i className="fa-regular fa-pen-to-square"></i>
            {!edit.current ? <span>Write a Review</span> : <span>Edit Review</span>}
          </div>
        </div>
      </div>
      {formVisible && (
        <ReviewForm item={itemId} review={editableReview} patch={edit.current} />
      )}
      {reviews &&
        Object.values(reviews).map((review) => {
          return itemId === review.itemId ? (
            <ReviewShow reviewId={review.id} test={numReviews}/>
          ) : (
            <></>
          );
        })}
    </>
  );
}

export default ReviewsComponent;
