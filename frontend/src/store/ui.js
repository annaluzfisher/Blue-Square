import { combineReducers } from "redux";

const TOGGLE_MODAL = "TOGGLE_MODAL";


export const toggleModal = (id) => ({
  type: TOGGLE_MODAL,
  id,
});


export const modalsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case TOGGLE_MODAL:
      newState[action.id].visible
        ? (newState[action.id].visible = false)
        : (newState[action.id].visible = true);
      return { ...newState };
    default:
      return newState;
  }
};

export const preloadedModals = {
  ui: {
    modals: {
      1: {
        id: 1,
        visible: false,
      },
    },
  },
};

const uiReducer = combineReducers({
  modals: modalsReducer,
});

export default uiReducer;
