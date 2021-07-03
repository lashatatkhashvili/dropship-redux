import Api from "../API";

export const loginAction = (data) => async (dispatch) => {
  dispatch({
    type: "LOGIN_DETAIL",
  });

  try {
    const loginApi = Api("login");
    const user = await loginApi.post("", data);
    localStorage.setItem("token", user.data.data.token);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        user: user.data.data,
      },
    });
  } catch (err) {
    localStorage.removeItem("token");
    dispatch({
      type: "LOGIN_FAIL",
    });
  }
};

export const registerAction = (data) => async (dispatch) => {
  dispatch({
    type: "LOGIN_DETAIL",
  });

  try {
    const registerApi = Api("register");
    const user = await registerApi.post("", data);
    localStorage.setItem("token", user.data.data.token);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        user: user.data.data,
      },
    });
  } catch (err) {
    localStorage.removeItem("token");
    dispatch({
      type: "LOGIN_FAIL",
    });
  }
};

export const authFail = () => {
  return {
    type: "AUTH_FAIL",
  };
};

export const tokenAction = (data) => {
  return {
    type: "TOKEN_DETAIL",
    payload: data,
  };
};
