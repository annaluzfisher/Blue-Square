import csrfFetch from "./csrf";
// import { storageUser } from "../index";

const RECEIVE_CURRENT_USER = "users/RECEIVE_CURRENT_USER";
const REMOVE_CURRENT_USER = "users/REMOVE_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
});

export const loginUser = (user) => async (dispatch) => {
  console.log("user-pre-fetch", user);
  const res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ user }),
  })
    const userData = await res.json()
    console.log('userData',userData);
     console.log('userData id',userData.user.id);
    dispatch(receiveCurrentUser(userData))

};

//this is no passed first and then isn't being triggered to re-render!
const storageUser = sessionStorage.getItem('currentUser')

export const logoutUser = () => async (dispatch) => {
  console.log("log out user pre-fetch",storageUser);
  csrfFetch("/api/session", {
    method: "DELETE",
  }).then(() => dispatch(removeCurrentUser()));
  console.log('storageUser post fetch',storageUser)
};

let initialState;
if (storageUser) {
  console.log('current user for inital state', storageUser);
  initialState = { user: JSON.parse(storageUser) };
} else {
  initialState = { user: null };
}

const sessionReducer = (state = initialState, action) => {
  console.log('do we hit reducer on refresh?',state)
  Object.freeze(state);
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("adding the user to store");
      return { ...newState, ...action.user };
    case REMOVE_CURRENT_USER:
      console.log("removing the user from store");
      newState = { user: null };
      return newState;
    default:
      return newState;
  }
};

export default sessionReducer;
