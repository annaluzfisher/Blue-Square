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
console.log('on load user', storageUser)

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
    console.log('initialize app store',store.getState());
    console.log("initialize app storageUser", storageUser);
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
