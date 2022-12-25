import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_SUCCESS,
  CLEAR_ERRORS,
  USER_REQUEST,
} from "../Constants/userConstants";

export const userReducer = (
  state = {
    loading: false,
    isAuthenticated: false,
    isRegistered:false,
    user: {},
  },
  { type, payload }
) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case USER_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_USER_SUCCESS:

      return {
        loading: false,
        isAuthenticated: true,
        user: payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        isRegistered: true,
        user: payload,
      };
    case LOGIN_USER_FAIL:
    case REGISTER_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
