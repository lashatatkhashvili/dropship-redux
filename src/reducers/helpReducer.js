const initState = {
  isVisible: false,
};

const helpReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_HELP":
      return { ...state, isVisible: !state.isVisible };
    default:
      return { ...state };
  }
};

export default helpReducer;
