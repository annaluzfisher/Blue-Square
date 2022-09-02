import csrfFetch from "./csrf";

const RECEIVE_USER = "RECEIVE_USER";
const DELETE_USER = "DELETE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  userId,
});

export const createUser = (user) => async (dispatch) => {
  console.log('increate',user)
  const res = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({"user":{user}}),
  })
    .then((result) => result.json())
    .then((newUser) => dispatch(receiveUser(newUser)))
    .catch((error) => console.log('error from createUser action:',error));
  // if (res.ok) {
  //   const newUser = await res.json();
  //   ;
  // } else {
  //   alert("error");
  // }
};

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_USER:
      return { ...newState, ...action.user };
    case DELETE_USER:
      delete newState[action.userId];
      return newState;
    default:
      return newState;
  }
};
export default userReducer;
