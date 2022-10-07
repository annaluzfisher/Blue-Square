import { useEffect, useState, useRef } from "react";
import "./reviewscomponent.css";
import ReviewForm from "../../Forms/ReviewForm";

import ReviewShow from "../ReviewShow/ReviewShow";
import Star from "../../Star";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItem } from "../../../store/item";

import { getAllReviews } from "../../../store/reviews";

function ReviewsComponent({ item }) {
  const { itemId } = useParams();
  const storeItem = useSelector(getItem(itemId));
  const [loading, setLoading] = useState(true);

  const [numReviews, setNumReviews] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const edit = useRef(false);
  const currentUser = useSelector((state) => state.session.user);

  const storeReviews = useSelector(getAllReviews);

  const [editableReview, setEditableReview] = useState();

  const handleFormToggle = ()=>{
   if (formVisible) {
    setFormVisible(false)
    setLoading(true)
    } else {
      setFormVisible(true)
      setTimeout(()=>{
        setLoading(false)
      },700)
    }
      
  }
  // useEffect(() => {
  //   console.log(do we get here)
  //  if(formVisible)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, [formVisible]);

  useEffect(() => {

    if (item.userIds?.includes(currentUser?.id)) {
      edit.current = true;
    } else {
      setEditableReview();
      edit.current = false;
    }
  }, [storeItem, numReviews]);

  useEffect(() => {
    if (storeReviews && currentUser) {
      setNumReviews(storeReviews.length);
      storeReviews.map((sreview) => {
        if (
          sreview.userId === currentUser.id &&
          sreview.itemId === parseInt(itemId)
        ) {
          setEditableReview(sreview);
          edit.current = true;
        }
      });
    }
  }, [storeReviews?.length]);

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
                return <Star key={i} filled={true} />;
              } else {
                return <Star key={i} filled={false} />;
              }
            })}
          </div>
        </div>
        <span>{item.reviewIds?.length} Reviews</span>
        <div className="bottom-bar">
          <div
            onClick={handleFormToggle}
          >
            <i className="fa-regular fa-pen-to-square"></i>
            {edit.current ? (
              <span>Edit Review</span>
            ) : (
              <span>Write a Review</span>
            )}
          </div>
        </div>
      </div>
      {formVisible && (
        <ReviewForm
          item={itemId}
          review={editableReview}
          patch={edit.current}
          loading={loading}
        />
      )}
      {storeItem?.reviewIds &&
        storeReviews.map((sreview) => {
          if (sreview.itemId === parseInt(itemId))
            return <ReviewShow key={sreview.id} reviewId={sreview.id} />;
        })}
    </>
  );
}

export default ReviewsComponent;
