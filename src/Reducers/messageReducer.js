import {
  MESSAGE_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_BY_ID_SUCCESS,
  MESSAGE_BY_ID_FAIL,
  MESSAGE_UPDATAE_SUCCESS,
  MESSAGE_UPDATE_FAIL,
  MESSAGE_DELETE_SUCCESS,
  MESSAGE_DELETE_FAIL,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/messageConstants";

export const messageReducer = (
  state = { messageList: [] },
  { type, payload }
) => {
  switch (type) {
    case MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
      };
    case MESSAGE_LIST_SUCCESS:
      return {
        loading: false,
        messageList: payload,
      };
    case MESSAGE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case MESSAGE_DELETE_SUCCESS:
    case MESSAGE_UPDATAE_SUCCESS:
    case MESSAGE_SUCCESS:
      return {
        loading: false,
        success: payload,
      };
    case MESSAGE_DELETE_FAIL:
    case MESSAGE_UPDATE_FAIL:
    case MESSAGE_FAIL:
    case MESSAGE_LIST_FAIL:
    case MESSAGE_BY_ID_FAIL:
      return {
        loading: false,
        messageList: [],
        message: null,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
};
