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
  USER_BY_ID_SUCCESS,
  USER_BY_ID_FAIL,
  USER_UPDATAE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
} from "../Constants/userConstants";

export const userReducer = (
  state = { loading: false, isAuthenticated: false, user: {} },
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
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
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
    case USER_UPDATAE_SUCCESS:
    case USER_DELETE_SUCCESS:
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: payload,
      };
    case USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
      };
    case USER_BY_ID_FAIL:
    case USER_UPDATE_FAIL:
    case USER_DELETE_FAIL:
    case USER_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
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
