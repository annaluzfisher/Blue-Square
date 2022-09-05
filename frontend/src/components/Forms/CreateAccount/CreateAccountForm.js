import "./createaccountform.css";
import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../store/user";
import Button from "../../Buttons/Button";


function CreateAccountForm() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mailingList, setMailingList] = useState('false');

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ email, password, firstName, lastName, companyName, mailingList });
  }, [email, password, firstName, lastName, companyName, mailingList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
  };


  return (
    <div className="create-user-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="names">
          <div className="input-container">
            <label>
              First Name*
              <input
                type="text"
           
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div className="input-container">
          <label>
            Last Name*
            <input
              type="text"
           
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          </div>
        </div>
        <div className="input-container">
        <label>
          Email Address*
          <input
            type="email"
      
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        </div>
        <div className="input-container">
        <label>
          Company Name
          <input
            type="text"
        
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        </div>
        
        <div className="input-container">
        <label>
          Password*
          <input
            type="password"
          
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        </div>
        <input
          type="checkbox"
          // checked="false"
          onChange={(e) => setMailingList(e.target.value)}
        />
        <label>I wish to receive Blue Square emails</label>

        <Button type={"SUBMIT"} />
      </form>
    </div>
  );
}

export default CreateAccountForm;
