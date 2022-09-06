import csrfFetch from "./csrf";

const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  item,
});

export const addItem = (itemId) => async (dispatch) => {
  csrfFetch(`/api/items/${itemId}`)
    .then((res) => res.json())
    .then((item) => dispatch(receiveItem(item)))
    .catch((error) => console.log("error in add item fetch"));
};

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_ITEM:
     newState[action.item.item.id] = action.item.item
     return newState
    default:
      return newState;
  }
};

export default itemReducer;