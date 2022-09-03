import "./createaccountform.css";
import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../store/user";
import SubmitButton from "../../Buttons/SubmitButton";


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

  // setEmail("");
  // setUser("");
  // setPassword("");
  // setCompanyName("");
  // setFirstName("");
  // setLastName("");
  // setMailingList("");

  return (
    <div className="create-user-form-wrapper">
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
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="checkbox"
          // checked="false"
          onChange={(e) => setMailingList(e.target.value)}
        />

        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton />
      </form>
    </div>
  );
}

export default CreateAccountForm;
