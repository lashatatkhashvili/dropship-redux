const initState = {
  isVisible: false,
};

const navReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_NAV":
      return { ...state, isVisible: !state.isVisible };
    default:
      return { ...state };
  }
};

export default navReducer;
