import csrfFetch from "./csrf";

const RECEIVE_CART = "RECEIVE_CART";
const DELETE_ITEM = "DELETE_ITEM";


export const receiveCart = (payload) => ({
  type: RECEIVE_CART,
  payload,
});

const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload
});


export const getCart = (state) => {
  if (!state) return null;
  else if (!state.cart) return null;
  else if (!state.cart.items) return [];
  else {
    return Object.values(state.cart.items);
  }
};


export const deleteCartItem = (cartItemId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const cart = await res.json();
    dispatch(deleteItem(cart));
  } else {
    console.log("error in delete cart item", res);
  }
};


export const createCart = (user) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts`, {
    method: "POST",
    body: JSON.stringify({ user }),
  });
  if (res.ok) {
    const cart = await res.json();
    dispatch(receiveCart(cart));
  }
};

export const fetchCart = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts/${userId}`);
  if (res.ok) {
    const cart = await res.json();
    dispatch(receiveCart(cart));
  }
};

export const addCartItem = (cart_item) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/`, {
    method: "POST",
    body: JSON.stringify({ cart_item }),
    headers: { Accept: "Application/json", "content-type": "application/json" },
  });
  if (res.ok) {
    const cart = await res.json();
    console.log('what is the cart from the back end looking like after update',cart)

    dispatch(receiveCart(cart));
  }
};

export const updateCartItem = (cartItemId, quantity) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: "PATCH",
    body: JSON.stringify({ quantity: quantity }),
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

const cartReducer = (state = { items: {} , numItems: 0}, action) => {
  Object.freeze(state);
  let newState = {...state};
  switch (action.type) {
    case RECEIVE_CART:
      if (action.payload.items){
      const cartItems = Object.values(action.payload.items)
      for (let item of cartItems){
        newState.items[item.cartItemId] = item;
      }
    }
      newState.numItems = action.payload.numItems || 0;
      return newState;
    case DELETE_ITEM:
        newState = {...action.payload}
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
