import csrfFetch from "./csrf";
import { receiveReviews } from "./reviews";

const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item,
});

export const getItem = (itemId) => (state) => {
  if (!state) return null;
  else if (!state.items) return null;
  else {
    return state.items[itemId];
  }
};

export const fetchItem = (itemId) => async (dispatch) => {

  csrfFetch(`/api/items/${itemId}`)
    .then((res) => res.json())
    .then((payload) => dispatch(addItemPayload(payload)))
    .catch((error) => console.log("error in add item fetch",error));
};

export const addItemPayload = (payload) => {
console.log('payload in addItemPayload', payload)
  return (dispatch) => {
    dispatch(receiveItem(payload.item));
    dispatch(receiveReviews(payload.reviews));
  };
};

//double dispatch here reviews to reviews reducer... one fetch?
const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_ITEM:
      action.item.price = (Math.round(action.item.price * 100) / 100).toFixed(2);
      newState[action.item.id] = action.item
     return newState
    default:
      return newState;
  }
};

export default itemReducer;