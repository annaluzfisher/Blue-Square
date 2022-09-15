import csrfFetch from "./csrf";

const RECEIVE_CART = "RECEIVE_CART";
const DELETE_ITEM = "DELETE_ITEM";


export const receiveCart = (payload) =>({
  type: RECEIVE_CART,
  payload
})

const deleteItem = (cartItemId) =>({
  type: DELETE_ITEM,
  cartItemId
})
export const deleteCartItem = (cartItemId) => async (dispatch)=> {
 const res =  await csrfFetch(`/api/cart_items/${cartItemId}`,{
    method: 'DELETE'
  })
  if (res.ok){
  dispatch(deleteItem(cartItemId))
  } else{
    console.log('error in delete cart item', res)
  }
}




  export const getCart = () => (state) => {
    if (!state) return null;
    else if (!state.cart) return null;
    else {
      return state.cart.items;
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

  export const fetchCart = (userId) => async (dispatch) => {
     const res = await csrfFetch(`/api/carts/${userId}`);
       if (res.ok) {
         const cart = await res.json();
         dispatch(receiveCart(cart));
       }
  }

  export const addCartItem = (cart_item) => async (dispatch) =>{

    const res = await csrfFetch(`/api/cart_items/`,{
      method: 'POST',
      body: JSON.stringify({cart_item}),
      headers: { 'Accept' : 'Application/json', 
    'content-type' : 'application/json'}
    })
       if (res.ok) {
         const cart = await res.json();
      
         dispatch(receiveCart(cart));
       }
  }

    export const updateCartItem = (cartItemId,quantity) => async (dispatch) => {

      const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: "PATCH",
        body: JSON.stringify( {quantity: quantity}),
        headers: {
          Accept: "Application/json",
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        const cart = await res.json();
      
        dispatch(receiveCart(cart));
      }
    };


  const cartReducer = (state = {items: {}}, action) => {
    Object.freeze(state);
    const newState = { ...state };
    switch (action.type) {
      case RECEIVE_CART:
    
        newState['items'] = action.payload.items

        newState['numItems'] = action.payload.numItems
   return { ...newState };
  //  case RECEIVE_ITEM:
  //     newState['items'] =action.payload
  //     return{...newState}
       case DELETE_ITEM:
       delete newState.items[action.cartItemId]
       newState['numItems'] -= 1
       return newState
      default:
        return newState;
    }
  };

  export default cartReducer;
  