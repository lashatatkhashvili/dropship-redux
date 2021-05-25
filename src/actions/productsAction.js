import productsReq from "../API";

export const getProducts = (sort) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const productsData = await productsReq(sort);

  sort === "asc" && productsData.data.sort((a, b) => b.price - a.price);
  sort === "desc" && productsData.data.sort((a, b) => a.price - b.price);
  sort === "az" &&
    productsData.data.sort((a, b) => (a.title > b.title ? 1 : -1));
  sort === "za" &&
    productsData.data.sort((a, b) => (a.title > b.title ? -1 : 1));
  sort &&
    sort.value &&
    (productsData.data = productsData.data.filter((item) =>
      sort.type === "$"
        ? item.price >= sort.value[0] && item.price <= sort.value[1]
        : Math.round(item.price / 8) >= sort.value[0] &&
          Math.round(item.price / 8) <= sort.value[1]
    ));

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
