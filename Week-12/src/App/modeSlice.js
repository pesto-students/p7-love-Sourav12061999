export const DarkModeState = {
  isDarkMode: false,
};

export const modeReducer = (state = DarkModeState, action) => {
  switch (action.type) {
    case false:
      return {
        ...state,
        isDarkMode: false,
      };
    case true:
      return {
        ...state,
        isDarkMode: true,
      };
    default:
      return state;
  }
};
