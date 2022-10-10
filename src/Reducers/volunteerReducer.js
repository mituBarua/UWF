import {
    VOLUNTEER_FAIL,
    VOLUNTEER_SUCCESS,
    VOLUNTEER_REQUEST,
    VOLUNTEER_LIST_SUCCESS,
    VOLUNTEER_LIST_FAIL,
    VOLUNTEER_BY_ID_SUCCESS,
    VOLUNTEER_BY_ID_FAIL,
    VOLUNTEER_UPDATAE_SUCCESS,
    VOLUNTEER_UPDATE_FAIL,
    VOLUNTEER_DELETE_SUCCESS,
    VOLUNTEER_DELETE_FAIL,
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
  } from "../Constants/volunteerConstants";
  
  export const volunteerReducer = (
    state = { volunteerList: [] },
    { type, payload }
  ) => {
    switch (type) {
      case VOLUNTEER_REQUEST:
        return {
          loading: true,
        };
      case VOLUNTEER_LIST_SUCCESS:
        return {
          loading: false,
          volunteerList: payload,
        };
      case VOLUNTEER_BY_ID_SUCCESS:
        return {
          loading: false,
          volunteer: payload,
        };
      case VOLUNTEER_DELETE_SUCCESS:
      case VOLUNTEER_UPDATAE_SUCCESS:
      case VOLUNTEER_SUCCESS:
        return {
          loading: false,
          success: payload,
        };
      case VOLUNTEER_DELETE_FAIL:
      case VOLUNTEER_UPDATE_FAIL:
      case VOLUNTEER_FAIL:
      case VOLUNTEER_LIST_FAIL:
      case VOLUNTEER_BY_ID_FAIL:
        return {
          loading: false,
          volunteerList: [],
          volunteer: null,
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
  