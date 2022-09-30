
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import NotFound from "./components/NotFound";
import RequireLogin from './components/CartPage/RequireLogin/RequireLogin'

import Footer from "./components/Footers/Footer/Footer";
import CategoryShowPage from "./components/CategoryShowPage";
import CollectionShowPage from "./components/CollectionShowPage";
import ScrollToTop from "./Util/ScrollToTop";


function App() {

const location = useLocation();
  
useEffect(()=>{
  window.scrollTo(0,0);
  console.log('the location',location)
},[location.pathname])
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
          <Route path="/Create-Account" element={<CreateAccount />} />

          <Route path="/" element={<MainPage />} />

          <Route path="/Cart/:userId" element={<CartPage />} />

          <Route path="/Cart" element={<RequireLogin />} />

          <Route path="/Items/:itemId" element={<ItemShowPage />} />

          <Route path="/Category/:categoryId" element={<CategoryShowPage />} />
          <Route
            path="/Collection/:collectionId"
            element={<CollectionShowPage />}
          />
          {/* <Route path=":collectionId/:categogryId" element={<CategoryShowPage />} /> */}
          <Route
            path="/404"
            element={<NotFound imgUrl={"BannerImages/notfound.jpg"} />}
          />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>

        <Footer />
      </div>
    </>
  );

    
}

export default App;
