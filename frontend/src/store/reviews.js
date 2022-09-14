
import csrfFetch from "./csrf";
//need an array of review_ids when i fetch an item
//need to also dispatch fetchReviews(itemId when i fetch a single item on the show page


const RECEIVE_REVIEW = "RECEIVE_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});



export const getReviews = (itemId) => (state) => {
  if (!state.items[itemId]) return null;
  else if (!state.reviews[itemId]) return null;
  else {
    return state.reviews[itemId];
  }
}

export const createReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews`, {
    method: "POST",
    body: JSON.stringify({ review }),
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(receiveReview(review));
  }
};

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_REVIEWS:
      newState = { ...state, ...action.reviews };
      return newState;
    default:
      return newState;
  }
};
export default reviewsReducer;