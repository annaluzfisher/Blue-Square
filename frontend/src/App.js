
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import { storageUser } from ".";
import { removeCurrentUser, receiveCurrentUser } from "./store/session";
import { useDispatch } from "react-redux";
import { tempCurrentUser } from "./store/csrf";
import { useState } from "react";
import React from "react";
const CreateAccount = React.lazy(() =>
  import("../src/components/CreateAccount/CreateAccount")
);
const CartPage = React.lazy(()=> import("./components/CartPage"));
const ItemShowPage = React.lazy(() => import("./components/ItemShowPage"));
// import { addCurrentUser } from "./store/user";

function App() {
  // document.addEventListener('scroll',(e) => {
  //   e.stopPropagation();
  // });

  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(tempCurrentUser);

  useEffect(() => {
    if (storageUser === null) {
      dispatch(removeCurrentUser());
    } else {
      dispatch(receiveCurrentUser(tempCurrentUser));
    }
  }, [currentUser]);
  return (
    <>
      <div className="app" id="app">
        <NavBar />
        <Routes>
          <Route path="Create-Account" element={<CreateAccount />} />
          <Route path="/" element={<MainPage />} />
          <Route path="Items/:1" element={<ItemShowPage />} />
          <Route path="Cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
