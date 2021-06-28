import axios from "axios";
const BASE_URL = "http://18.185.148.165:3000";

export const loginAction = (data) => async (dispatch) => {
  dispatch({
    type: "LOGIN_DETAIL",
  });
  console.log(data);
  try {
    const user = await axios.post(BASE_URL + "/login", data);
    localStorage.setItem("token", user.data.data.token);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        user: user.data.data,
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "LOGIN_FAIL",
      payload: {},
    });
  }
};

export const tokenAction = (data) => {
  return {
    type: "TOKEN_DETAIL",
    payload: data,
  };
};
