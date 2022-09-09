
import { Routes, Route , Navigate} from "react-router-dom";
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

import Footer from "./components/Footers/Footer/Footer";
import CategoryShowPage from "./components/CategoryShowPage";
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


    // if (!LOADED) {
    //   return (
    //     <>
    //       <h1>"loading"</h1>
    //       <MainPage />
    //     </>
    //   );
    // } else {   caffeione for heroku 
      
      return (
        <>
          <div className="app" id="app">
            <NavBar />
            <Routes>
              <Route path="Create-Account" element={<CreateAccount />} />
              <Route path="/" element={<MainPage />} />
              <Route path="Cart" element={<CartPage />} />
              <Route path="Items/:itemId" element={<ItemShowPage />} />
              <Route path="Category/:categoryId" element={<CategoryShowPage />} />
              {/* <Route path=":collectionId/:categogryId" element={<CategoryShowPage />} /> */}
              <Route
                path="404"
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
