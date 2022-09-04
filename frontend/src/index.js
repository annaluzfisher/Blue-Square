import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { restoreCSRF } from "./store/csrf";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import { preloadedModals } from "./store/ui";

export const storageToken = sessionStorage.getItem("X-CSRF-Token");
   export const storageUser = sessionStorage.getItem("currentUser");


const store =  configureStore(preloadedModals);

if (
  storageToken === null || storageUser === 'null'
  ) {
    restoreCSRF()
    .then(initializeApp)
    .catch((err) => console.log(err));
  } else {
    initializeApp();
  }
  


  
  
  function initializeApp() {
    ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
window.store = store;
window.storageUser = storageUser;
