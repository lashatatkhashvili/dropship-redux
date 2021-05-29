import update from "immutability-helper";
import { sortProducts, filterProducts } from "../helper";

const initState = {
  products: [],
  sortedProducts: [],
  isLoading: true,
  productModal: 0,
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        sortedProducts: action.payload.sorted,
        isLoading: false,
      };

    case "SEARCH_PRODUCTS":
      return {
        ...state,
        products: [...state.sortedProducts].filter(
          (item) =>
            item.title.toUpperCase().indexOf(action.payload.value) !== -1
        ),
      };

    case "SORT_PRODUCTS":
      return {
        ...state,
        products: sortProducts(action.payload.sort, [...state.products]),
        sortedProducts: sortProducts(action.payload.sort, [
          ...state.sortedProducts,
        ]),
      };

    case "FILTER_PRODUCTS":
      return {
        ...state,
        products: filterProducts(action.payload.filter, [
          ...state.sortedProducts,
        ]),
      };

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
