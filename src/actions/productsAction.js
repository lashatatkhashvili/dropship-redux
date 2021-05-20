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
