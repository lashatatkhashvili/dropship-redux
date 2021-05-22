import update from "immutability-helper";

const initState = {
  products: [],
  sortedProducts: [],
  isLoading: true,
  productModal: 0,
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload.products, isLoading: false };
    case "SEARCH_PRODUCTS":
      return { ...state, products: action.payload.products };
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
    case "SELECT_CONTROL": {
      return {
        ...state,
        products: state.products.map((product) => ({
          ...product,
          selected: action.payload.value === "selectAll" ? true : false,
        })),
      };
    }
    case "PRODUCT_MODAL": {
      return update(state, {
        productModal: {
          $set: action.payload.value,
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
