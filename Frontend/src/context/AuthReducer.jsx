const AuthReducer = (state, action) => {
  switch (action.type) {
    case "Login_starts":
      return {
        ...state,
        user: null,
        isFetching: false,
        error: false,
      };
    case "Login_Success":
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "Login_Failure":
      return {
        ...state,
        user: null,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
