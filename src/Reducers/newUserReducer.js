import {
  CLEAR_SUCCESS,
  CLEAR_ERRORS,
  NEW_USER_REQUEST,
  USER_BY_ID_SUCCESS,
  USER_BY_ID_FAIL,
  USER_UPDATAE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../Constants/userConstants";

export const newUserReducer = (
  state = {
    loading: false,
    userList: [],
  },
  { type, payload }
) => {
  switch (type) {
    case NEW_USER_REQUEST:
      return {
        loading: true,
      };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        userList: payload,
      };
    case USER_UPDATAE_SUCCESS:
    case USER_DELETE_SUCCESS:
    case USER_SUCCESS:
      return {
        loading: false,
        success: payload,
      };
    case USER_BY_ID_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_LIST_FAIL:
    case USER_BY_ID_FAIL:
    case USER_UPDATE_FAIL:
    case USER_DELETE_FAIL:
    case USER_FAIL:
      return {
        loading: false,
        userInfo: null,
        userList: null,
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
