import csrfFetch from "./csrf";

const RECEIVE_CART = "RECEIVE_CART";
const DELETE_CART = "DELETE_CART";

const currentUser = sessionStorage.getItem("currentUser");
// need a fetch on refresh to see if a user has a cart
//using user form session stroage
// need a create cart that fetchees a post to back end and then a receive cart to state
export const receiveCart = (payload) =>({
  type: RECEIVE_CART,
  payload
})

  export const getCart = () => (state) => {
    if (!state) return null;
    else if (!state.cart) return null;
    else {
      return state.cart;
    }
  };

export const createCart = (user) => async (dispatch) => {
   const res = await csrfFetch(`/api/carts`,{
    method: 'POST',
    body: JSON.stringify({user})
  })
  if (res.ok){
    const cart = await res.json()
    dispatch(receiveCart(cart))
  } }

  export const fetchCart = (userId,cartId) => async (dispatch) => {
     const res = await csrfFetch(`/api/users/${userId}/carts/${cartId}`);
       if (res.ok) {
         const cart = await res.json();
         dispatch(receiveCart(cart));
       }
  }

  export const addCartItem = (payload) => async (dispatch) =>{
    const res = await csrfFetch(`/api/users/${payload.userId}/carts/${payload.cartId}`,{
      method: 'PATCH',
      
    })
       if (res.ok) {
         const cart = await res.json();
         dispatch(receiveCart(cart));
       }
  }



  const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = { ...state };
    switch (action.type) {
      case RECEIVE_CART:
        console.log('in the reducer cart/payload', action.cart)
   return { ...newState, ...action.payload };
       
      default:
        return newState;
    }
  };

  export default cartReducer;
  