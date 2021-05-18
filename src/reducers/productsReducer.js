import update from "immutability-helper";

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

    case "SELECT": {
      return update(state, {
        products: {
          [action.payload.index]: {
            selected: {
              $apply: (select) => !select,
            },
          },
        },
      });
    }

    default:
      return { ...state };
  }
};

export default productsReducer;

// case "SELECT": {
//   const arr = [...state.products];
//   arr[action.payload.index].selected = true;
//   return {
//     ...state,
//     products: arr,
//   };
// }
