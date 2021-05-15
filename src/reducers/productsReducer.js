const initState = {
  products: [],
  sortedProducts: [],
  isLoading: true,
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload.products, isLoading: false };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default productsReducer;
