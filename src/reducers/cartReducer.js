const initState = {
  cart: [],
  isLoading: true,
  errorMessage: "",
  message: "",
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CART_LIST":
      return {
        ...state,
        cart: action.payload.cartList,
        errorMessage: "",
        isLoading: false,
      };

    case "FETCH_CART_FAIL":
      return {
        ...state,
        errorMessage: action.payload.error,
        isLoading: false,
      };

    case "ADD_SUCCESS":
      return { ...state, cart: action.payload.cartList, message: "success" };

    case "ADD_FAIL":
      return { ...state, message: "fail" };

    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload.cartList };

    case "LOADING_DETAIL":
      return { ...state, isLoading: true };

    case "MESSAGE":
      return { ...state, message: "" };

    default:
      return { ...state };
  }
};

export default cartReducer;
