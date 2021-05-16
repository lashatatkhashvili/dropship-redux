const initState = {
  isVisible: false,
  anim: false,
};

const navReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_NAV":
      return { ...state, isVisible: !state.isVisible };
    case "ANIM":
      return { ...state, anim: !state.anim };
    default:
      return { ...state };
  }
};

export default navReducer;
