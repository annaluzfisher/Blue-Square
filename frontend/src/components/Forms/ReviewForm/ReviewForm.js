import "./reviewform.css";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Buttons/Button";
import Star from "../../Star";
import { createReview, updateReview, deleteReview } from "../../../store/reviews";



function ReviewForm({ item, review = {} ,patch} ) {
  const [title, setTitle] = useState(review.title);
  const [content, setContent] = useState(review.content);
  const [name, setName] = useState(review.name);
  const [userId, setUserId] = useState(review.userId);
   const [itemId, setItemId] = useState(item);
  const [rating, setRating] = useState(review.rating);
  const [reviewId, setReviewId] = useState(review.id)
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    if (currentUser){
    setUserId(currentUser.id);
    setName(currentUser.firstName + ' ' + currentUser.lastName[0]+'.')
    }
  },[currentUser])
  

  const handleClick=(i)=>{
    setRating(i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patch){
    dispatch(createReview({title,rating,content,name,userId,itemId}))
    }else {
      dispatch(updateReview({title,rating,content,name,userId,itemId},reviewId))
    }
  };

  return (
    <div className="review-form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>{"*"}</span>
          <span>Indicates a required field</span>
        </label>
        <label>
          <span>{"*"}</span>
          <label>Score</label>
        </label>
        <div className="form-stars-container">
          {[1, 2, 3, 4, 5].map((i) => {
            if (i <= rating) {
              return (
                <Star filled={true} value={i} onClick={() => handleClick(i)} />
              );
            } else {
              return (
                <Star filled={false} value={i} onClick={() => handleClick(i)} />
              );
            }
          })}
        </div>
        <label>
          <span>{"*"}</span>
          <label>Title</label>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>
          <span>{"*"}</span>
          <label>Review</label>
        </label>
        <input
          type="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <label>
          <span>{"*"}</span>
          <label>Use your name</label>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        {patch ? (
          <div className="rf-button-container">
            <Button type={"submit"} name={"UPDATE"} />
            <Button color={"black"}  name={"Delete"} onClick={()=>dispatch(deleteReview(reviewId))} />
          </div>
        ) : (
          <Button color={"black"} type={"submit"} name={"POST"} />
        )}
      </form>
    </div>
  );
}

export default ReviewForm;
