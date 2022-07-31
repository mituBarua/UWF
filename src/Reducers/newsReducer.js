import {
    NEWS_FAIL,
    NEWS_SUCCESS,
    NEWS_REQUEST,
    NEWS_LIST_SUCCESS,
    NEWS_LIST_FAIL,
    NEWS_BY_ID_SUCCESS,
    NEWS_BY_ID_FAIL,
    NEWS_UPDATAE_SUCCESS,
    NEWS_UPDATE_FAIL,
    NEWS_DELETE_SUCCESS,
    NEWS_DELETE_FAIL,
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
  } from "../Constants/newsConstants";
  
  export const newsReducer = (
    state = { newslList: [] },
    { type, payload }
  ) => {
    switch (type) {
      case NEWS_REQUEST:
        return {
          loading: true,
        };
      case NEWS_LIST_SUCCESS:
        return {
          loading: false,
          newsList: payload,
        };
      case NEWS_BY_ID_SUCCESS:
        return {
          loading: false,
          news: payload,
        };
      case NEWS_DELETE_SUCCESS:
      case NEWS_UPDATAE_SUCCESS:
      case NEWS_SUCCESS:
        return {
          loading: false,
          success: payload,
        };
      case NEWS_DELETE_FAIL:
      case NEWS_UPDATE_FAIL:
      case NEWS_FAIL:
      case NEWS_LIST_FAIL:
      case NEWS_BY_ID_FAIL:
        return {
          loading: false,
          newsList: [],
          news: null,
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
  