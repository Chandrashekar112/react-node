export const userReducer = {};

userReducer.initialState = {
  userList: [],
  iSTable: false,
};

userReducer.reducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_LIST":
      return { ...state, userList: action.payload };
    case "EDIT_USER_LIST":
      return { ...state, userList: action.payload };
    case "TABLE_EXPEND":
      return { ...state, iSTable: action.payload };
    default:
      return state;
  }
};
