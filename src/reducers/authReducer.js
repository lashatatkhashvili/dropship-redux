const initState = {
  details: {},
  isLogged: false,
  errorMessage: "",
  redirect: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        details: action.payload.user,
        isLogged: true,
        redirect: true,
        errorMessage: "",
      };
    case "TOKEN_DETAIL":
      return {
        ...state,
        details: action.payload.user,
        isLogged: true,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isLogged: false,
        errorMessage: "Wrong e-mail or password",
      };
    case "LOGIN_DETAIL":
      return { ...state, isLogged: false };

    default:
      return { ...state };
  }
};

export default authReducer;
