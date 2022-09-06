
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
import CreateAccount from "../src/components/CreateAccount/CreateAccount";
import CartPage from "./components/CartPage";
import ItemShowPage from "./components/ItemShowPage";
import { LOADED } from "../src/components/Masthead/Masthead"

// const CreateAccount = React.lazy(() =>
//   import("../src/components/CreateAccount/CreateAccount")
// );
// const CartPage = React.lazy(()=> import("./components/CartPage"));
// const ItemShowPage = React.lazy(() => import("./components/ItemShowPage"));
// import { addCurrentUser } from "./store/user";

function App() {


  

  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(tempCurrentUser);

  useEffect(() => {
    if (storageUser === null) {
      dispatch(removeCurrentUser());
    } else {
      dispatch(receiveCurrentUser(tempCurrentUser));
    }
  }, [currentUser]);

    if (!LOADED) {
      return "loading";
    } else {
      
      return (
        <>
          <div className="app" id="app">
            <NavBar />
            <Routes>
              <Route path="Create-Account" element={<CreateAccount />} />
              <Route path="/" element={<MainPage />} />
              <Route path="Items/:itemId" element={<ItemShowPage />} />
              <Route path="Cart" element={<CartPage />} />
            </Routes>
          </div>
        </>
      );
    }
}

export default App;
