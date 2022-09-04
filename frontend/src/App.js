import CreateAccountForm from "./components/Forms/CreateAccount/CreateAccountForm";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";

import { storageUser } from ".";
import { removeCurrentUser,receiveCurrentUser } from "./store/session";
import { useDispatch } from 'react-redux'
import { tempCurrentUser } from "./store/csrf";
import { useState } from 'react'

function App() {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(tempCurrentUser);

  useEffect(()=> {
    if (storageUser === null){
      dispatch(removeCurrentUser())
    } else{
      dispatch(receiveCurrentUser(tempCurrentUser))
    }
  },[currentUser])
  return (
    <>
      <div className="app">
        <NavBar/>
        <Routes>
          <Route path="Create-Account" element={<CreateAccountForm />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


