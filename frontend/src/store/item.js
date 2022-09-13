import csrfFetch from "./csrf";

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
    .then((item) => dispatch(receiveItem(item)))
    .catch((error) => console.log("error in add item fetch",error));
};

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_ITEM:
      action.item.item.price = (Math.round(action.item.item.price * 100) / 100).toFixed(2);
      newState[action.item.item.id] = action.item.item
     return newState
    default:
      return newState;
  }
};

export default itemReducer;