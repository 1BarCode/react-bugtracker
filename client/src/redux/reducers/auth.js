import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state.authData, authData: action?.payload };
    case LOGOUT:
      localStoreage.clear();
      return { ...state.authData, authData: null };
    default:
      return state;
  }
};
