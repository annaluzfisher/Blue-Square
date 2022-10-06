import csrfFetch from "./csrf";


const RECEIVE_ITEMS = "RECEIVE_ITEMS";
const DELETE_ITEMS = "DELETE_ITEMS";

export const getResults = (state) => {
if (!state) return null;
if (!state.results) return [];
return Object.values(state.results);
}

const receiveResults = (items) => ({
  type: RECEIVE_ITEMS,
  items,
});

export const clearResults = () =>({
  type: DELETE_ITEMS
})

export const fetchSearch = (query) => async (dispatch) => {
  console.log(query)
  csrfFetch(`api/search/${query}`)
    .then((res) => res.json())
    .then((payload) => dispatch(receiveResults(payload)))
    .catch((error) => console.log("error in search results fetch", error));
};


const resultsReducer = (state,action)=>{
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ITEMS:
  
    return { ...action.items};
    case DELETE_ITEMS:
      newState = {};
      return newState;
    default:
      return newState;
  }
};

export default resultsReducer;