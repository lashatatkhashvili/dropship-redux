import productsReq from "../API";

export const getProducts = (sort) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const productsData = await productsReq(sort);
  const searchedProducts = productsData.data.filter(
    (item) => item.title.toUpperCase().indexOf(sort) !== -1
  );

  dispatch({
    type: "SEARCH_PRODUCTS",
    payload: {
      products: searchedProducts,
    },
  });

  dispatch({
    type: "FETCH_PRODUCTS",
    payload: {
      products: productsData.data,
    },
  });
};

export const searchProducts = (value) => async (dispatch) => {
  const productsData = await productsReq();
  const searchedProducts = productsData.data.filter(
    (item) => item.title.toUpperCase().indexOf(value) !== -1
  );

  dispatch({
    type: "SEARCH_PRODUCTS",
    payload: {
      products: searchedProducts,
    },
  });
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
