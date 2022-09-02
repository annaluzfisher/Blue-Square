import "./createuserform.css";
import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Form.css";
import { createUser } from "../../store/user";


function CreateUserForm() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mailingList, setMailingList] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ email, password, firstName, lastName, companyName, mailingList });
  }, [email, password, firstName, lastName, companyName, mailingList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
  };

  setEmail("");
  setUser("");
  setPassword("");
  setCompanyName("");
  setFirstName("");
  setLastName("");
  setMailingList("");

  return (
    <div className="user-form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="your_email@internet.com..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="your_email@internet.com..."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="email"
          placeholder="your_email@internet.com..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="checkbox"
          checked={mailingList}
          onChange={(e) => setMailingList(e.target.value)}
        />

        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value={type} />
      </form>
    </div>
  );
}

export default CreateUserForm;
