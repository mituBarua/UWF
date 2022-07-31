import {
    APPEAL_FAIL,
    APPEAL_SUCCESS,
    APPEAL_REQUEST,
    APPEAL_LIST_SUCCESS,
    APPEAL_LIST_FAIL,
    APPEAL_BY_ID_SUCCESS,
    APPEAL_BY_ID_FAIL,
    APPEAL_UPDATAE_SUCCESS,
    APPEAL_UPDATE_FAIL,
    APPEAL_DELETE_SUCCESS,
    APPEAL_DELETE_FAIL,
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
  } from "../Constants/appealConstants";
  
  export const appealReducer = (
    state = { appealList: [] },
    { type, payload }
  ) => {
    switch (type) {
      case APPEAL_REQUEST:
        return {
          loading: true,
        };
      case APPEAL_LIST_SUCCESS:
        return {
          loading: false,
          appealList: payload,
        };
      case APPEAL_BY_ID_SUCCESS:
        return {
          loading: false,
          appeal: payload,
        };
      case APPEAL_DELETE_SUCCESS:
      case APPEAL_UPDATAE_SUCCESS:
      case APPEAL_SUCCESS:
        return {
          loading: false,
          success: payload,
        };
      case APPEAL_DELETE_FAIL:
      case APPEAL_UPDATE_FAIL:
      case APPEAL_FAIL:
      case APPEAL_LIST_FAIL:
      case APPEAL_BY_ID_FAIL:
        return {
          loading: false,
          appealList: [],
          appeal: null,
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
  