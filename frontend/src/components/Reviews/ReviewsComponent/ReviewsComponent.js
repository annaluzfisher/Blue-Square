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

  const [editableReview, setEditableReview] = useState();




  useEffect(() => {

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
     
      Object.values(storeReviews).map((sreview) => {
        if (sreview.userId === currentUser.id && sreview.itemId === parseInt(itemId)) setEditableReview(sreview);

      });
    }
  }, [item.reviewIds?.length, numReviews,item]);




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
            {!edit.current ? (
              <span>Write a Review</span>
            ) : (
              <span>Edit Review</span>
            )}
          </div>
        </div>
      </div>
      {formVisible && (
        <ReviewForm
          item={itemId}
          review={editableReview}
          patch={edit.current}
        />
      )}
      {storeItem?.reviewIds &&
       Object.values(storeReviews).map((sreview) => {
        if (sreview.itemId === parseInt(itemId)) 
             return  <ReviewShow reviewId={sreview.id} /> 
       }) }


       
    </>
  );
}

export default ReviewsComponent;
