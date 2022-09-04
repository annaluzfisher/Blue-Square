import "./loginform.css";
import SubmitButton from "../../Buttons/SubmitButton";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/session";
import { useState, useEffect } from "react";
import  LinkButton from "../../Buttons/LinkButton/LinkButton";

function LogInForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(user));
  };

  useEffect(() => {
    setUser({email, password});
  }, [email, password]);

  return (
    <>
      <div className="login-form-wrapper">
        <span>Login To Your Account</span>
        <form onSubmit={handleSubmit}>
          <label>Email Address*</label>
          <input
            type="email"
            placeholder="your_email@internet.com..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password*</label>
          <input
            type="password"
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <SubmitButton name={"Submit"} />
        </form>
        <div className="lower-form">
          <span>Haven't been down this trail before?</span>
          <LinkButton localPath="Create-Account" name="Register" />
        </div>
      </div>
    </>
  );
}

export default LogInForm;
