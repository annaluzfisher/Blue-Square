import "./reviewform.css";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Buttons/Button";
import Star from "../../Star";
import { createReview, updateReview, deleteReview } from "../../../store/reviews";
import Errors from "../../Errors";


function ReviewForm({ item, review = {} ,patch} ) {
  const [title, setTitle] = useState(review.title);
  const [content, setContent] = useState(review.content);
  const [name, setName] = useState(review.name);
  const [userId, setUserId] = useState(review.userId);
   const [itemId, setItemId] = useState(item);
  const [rating, setRating] = useState(review.rating||5);
  const [reviewId, setReviewId] = useState(review.id)
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState('')

  useEffect(()=>{
    if (currentUser){
    setUserId(currentUser.id);
    setName(currentUser.firstName + ' ' + currentUser.lastName[0]+'.')
    }
  },[currentUser])
  

  const handleClick=(i)=>{
    setRating(i);
  }
     const validate = (string) => {
      if (string.length > 50){
        return true
      } else{
        setErrors('Make sure all required fields are filled out... Review must be at least 50 characters')
        return false
      }
     }
  


  const handleSubmit = (e) => {
    e.preventDefault();
   if (validate(content)) {
      
      if (!patch){
      dispatch(createReview({title,rating,content,name,userId,itemId}))
      }else {
      dispatch(updateReview({title,rating,content,name,userId,itemId},reviewId))
      }

    setTitle('')
    setContent('')
    setRating(5)
    setName('')
     } else{
        setErrors('Something went wrong')
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
          onChange={(e) => setName(e.target.value)}
        />
        {patch ? (
          <div className="rf-button-container">
            <Button type={"submit"} name={"UPDATE"} />
            <div color={"black"}  name={"Delete"} onClick={()=>dispatch(deleteReview(reviewId))}>DELETE</div>
          </div>
        ) : (
          <Button className='post' color={"black"} type={"submit"} name={"POST"} />
        )}
        {errors && <Errors errors={errors} />}
      </form>
    </div>
  );
}

export default ReviewForm;