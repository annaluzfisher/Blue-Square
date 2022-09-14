import "./reviewform.css";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Buttons/Button";
import Star from "../../Star";
import { createReview } from "../../../store/reviews";


function ReviewForm({ itemId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState('');
  const [userId, setUserId] = useState();
  const [rating, setRating] = useState(1);
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  if (currentUser) setUserId(currentUser.id);
  

  const handleClick=(i)=>{
    setRating(i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview({title,rating,content,name,userId,itemId}))
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
          {[1,2,3,4,5].map(i => {
            if (i <= rating) {
             return <Star filled={true} value={i} onClick={() => handleClick(i)} />
            } else {
             return <Star filled={false} value={i} onClick={() => handleClick(i)} />
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
  
      
          <Button color={"black"} type={"submit"} name={"POST"} />{" "}
    
      </form>
    </div>
  );
}

export default ReviewForm;
