import Api from "../API";

export const addToCart = (productId, qty) => async (dispatch) => {
  dispatch({
    type: "MESSAGE",
  });
  try {
    const cartApi = Api("api/v1/cart/add");
    const cartList = await cartApi.post("", { productId, qty });

    dispatch({
      type: "ADD_SUCCESS",
      payload: {
        cartList: cartList.data.data.cartItem.items,
      },
    });
  } catch (err) {
    dispatch({
      type: "ADD_FAIL",
    });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    const cartApi = Api(`api/v1/cart/remove/${id}`);
    const cartList = await cartApi.post("");

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        cartList: cartList.data.data.cartItem.items,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCartList = () => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  try {
    const cartApi = Api("api/v1/cart");
    const cartList = await cartApi.get();

    dispatch({
      type: "FETCH_CART_LIST",
      payload: {
        cartList: cartList.data.data.cartItem.items,
      },
    });
  } catch (err) {
    dispatch({
      type: "FETCH_CART_FAIL",
      payload: {
        error: err && err.response && err.response.status,
      },
    });
  }
};

export const updateCartList = (id, qty) => async (dispatch) => {
  try {
    const cartApi = Api(`api/v1/cart/update/${id}`);
    const cartList = await cartApi.post("", {
      qty,
    });

    dispatch({
      type: "FETCH_CART_LIST",
      payload: {
        cartList: cartList.data.data.cartItem.items,
      },
    });
  } catch (err) {
    dispatch({
      type: "FETCH_CART_FAIL",
      payload: {
        error: err && err.response && err.response.status,
      },
    });
  }
};

export const clearMessage = () => {
  return {
    type: "MESSAGE",
  };
};
