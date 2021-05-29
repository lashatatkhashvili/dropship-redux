import productsReq from "../API";

export const getProducts = (sort) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const productsData = await productsReq(sort);

  dispatch({
    type: "FETCH_PRODUCTS",
    payload: {
      products: productsData.data,
      sorted: productsData.data,
    },
  });
};

export const sortProducts = (sort) => {
  return {
    type: "SORT_PRODUCTS",
    payload: {
      sort,
    },
  };
};

export const filterProducts = (filter) => {
  return {
    type: "FILTER_PRODUCTS",
    payload: {
      filter,
    },
  };
};

export const searchProducts = (value) => {
  return {
    type: "SEARCH_PRODUCTS",
    payload: {
      value,
    },
  };
};

export const select = (index) => {
  return {
    type: "SELECT",
    payload: {
      index,
    },
  };
};

export const selectControl = (value) => {
  return {
    type: "SELECT_CONTROL",
    payload: {
      value,
    },
  };
};

export const productModal = (value) => {
  return {
    type: "PRODUCT_MODAL",
    payload: {
      value,
    },
  };
};
