import "./LogInForm.css";
import SubmitButton from "../../Buttons/SubmitButton";
import { useDispatch, useEffect } from "react-redux";
import { loginUser } from "../../../store/session";
import { useState } from "react";

function LogInForm() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your_email@internet.com..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton name={"Log In"} />
      </form>
    </div>
  );
}

export default LogInForm;
