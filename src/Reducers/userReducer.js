import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
} from "../Constants/userConstants";

export const userReducer = (state = { user: {} }, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: payload,
      };
    case LOGIN_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
    default:
      return state;
  }
};
