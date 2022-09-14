import "./reviewform.css";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Buttons/Button";

function ReviewForm({ itemId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState('');
  const [userId, setUserId] = useState();

  // const currentUser = useSelector((state) => state.session.user);

  // if (currentUser) setUserId(currentUser.id);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="form-stars-container"></div>
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
        <div>
          <label>
            <span>{"*"}</span>
            <span>Use your name:</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <p>
          {" "}
          <Button color={"black"} type={"submit"} name={"POST"} />{" "}
        </p>
      </form>
    </div>
  );
}

export default ReviewForm;
