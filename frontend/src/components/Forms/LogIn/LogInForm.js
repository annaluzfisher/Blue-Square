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
    console.log("user in submit", user);
    dispatch(loginUser(user));
  };

  useEffect(() => {
    setUser({email, password});
  }, [email, password]);

  return (
    <>
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
    <LinkButton localPath="Create-Account" name="Create Account"/>
    </>
  );
}

export default LogInForm;
