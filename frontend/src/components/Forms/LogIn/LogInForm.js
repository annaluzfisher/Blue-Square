import "./loginform.css";
import { useDispatch , useSelector} from "react-redux";
import { loginUser } from "../../../store/session";
import { useState, useEffect } from "react";
import  Button from '../../Buttons/Button/Button'
import { toggleModal } from "../../../store/ui";

function LogInForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const NAVIDATION_ID = 1;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(user));
  };

  useEffect(() => {
    setUser({email, password});
  }, [email, password]);
  const errors = 'oh no'
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
          {errors && 
          <div className="errors-container">
            <div>{errors}</div>
          </div>
          }

          <Button name={"SUBMIT"} type={'submit'} color={'primary'} />
        </form>
        <div className="lower-form">
          <span>Haven't been down this trail before?</span>
          <Button localPath="Create-Account" name={"REGISTER"} color={'black'} />
        </div>
      </div>
    </>
  );
}

export default LogInForm;
