const initState = {
  details: {},
  isLogged: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, details: action.payload.user, isLogged: true };
    case "TOKEN_DETAIL":
      return { ...state, details: action.payload.user, isLogged: true };
    case "LOGIN_FAIL":
      return { ...state, isLogged: false };
    case "LOGIN_DETAIL":
      return { ...state, isLogged: false };

    default:
      return { ...state };
  }
};

export default authReducer;
