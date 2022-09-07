import  csrfFetch  from './csrf'
import { combineReducers } from 'redux';

const RECEIVE_COLLECTIONS ='RECEIVE_COLLECTIONS'
const RECEIVE_CATEGORY ='RECEIVE_CATEGORY'
const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
})
const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
})

const receiveCollection = (collection) => ({
  type: RECEIVE_COLLECTION,
  collection
});

export const getCategories = () => (state) => {
  if (!state) return null;
  else if (!state.collections.categories) return null;
  else {
    return state.collections.categories;
  }
};

export const fetchCollections = () => async dispatch =>{
  csrfFetch("/api/collections")
    .then((res) => res.json())
    .then((payload) => dispatch(addAll(payload)))
    .catch((error) => console.log("error in add collection fetch", error));
}

export const addPayload = (payload) => {
  return (dispatch) => {
    console.log(payload);
    dispatch(receiveCategories(payload.categories));
    dispatch(receiveCollections(payload.collections));
  };
};

const categoriesReducer = (state ={}, action) =>{
  Object.freeze(state);
 const newState = {...state}
  switch(action.type){
    case(RECEIVE_CATEGORIES):
    newState = {...state, ...action.categories}
    return newState;
    default:
      return newState;
  }
}

const collectionReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
      newState = { ...state, ...action.collections };
      return newState;
    default:
      return newState;
  }
};


const collectionsReducer = combineReducers({
  collections: collectionReducer,
  categories: categoriesReducer,
});

export default collectionsReducer;