import "./loginform.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/session";
import { useState, useEffect } from "react";
import Button from "../../Buttons/Button/Button";
import { toggleModal } from "../../../store/ui";
import Errors from "../../Errors";

function LogInForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ email: "", error: true });
  const [password, setPassword] = useState({ password: "", error: true });
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState("");

  const NAVIDATION_ID = 1;

  const areValid = (email, password) => {
    console.log("email", email, "password", password);
    if (email.length < 5) {
      setErrors("Please Enter a valid email address");
 
    } if (password.length < 6) {
      setErrors("Password must be at least 6 characters");
 
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (areValid(email.email, password.password)) {
      console.log("in the if");

      let errors;
      errors = dispatch(loginUser(user));
      if (errors) {
        setTimeout(()=>{
          setErrors("Incorrect Email or Password. Please try again.")},
          1000
        );
      }
    }
  };

  useEffect(() => {
    setUser({ email: email.email, password: password.password });
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
            value={email.email}
            onChange={(e) => setEmail({ email: e.target.value, error: true })}
          />
          <label>Password*</label>
          <input
            type="password"
            placeholder="password..."
            value={password.password}
            onChange={(e) =>
              setPassword({ password: e.target.value, error: true })
            }
          />
          {errors && <Errors errors={errors} />}

          <Button name={"SUBMIT"} type={"submit"} color={"primary"} />
        </form>
        <div className="lower-form">
          <span>Haven't been down this trail before?</span>
          <Button
            localPath="Create-Account"
            name={"REGISTER"}
            color={"black"}
          />
        </div>
      </div>
    </>
  );
}

export default LogInForm;
