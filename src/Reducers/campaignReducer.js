import {
    CAMPAIGN_FAIL,
    CAMPAIGN_SUCCESS,
    CAMPAIGN_REQUEST,
    CAMPAIGN_LIST_SUCCESS,
    CAMPAIGN_LIST_FAIL,
    CAMPAIGN_BY_ID_SUCCESS,
    CAMPAIGN_BY_ID_FAIL,
    CAMPAIGN_UPDATAE_SUCCESS,
    CAMPAIGN_UPDATE_FAIL,
    CAMPAIGN_DELETE_SUCCESS,
    CAMPAIGN_DELETE_FAIL,
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
  } from "../Constants/campaignConstants";
  
  export const campaignReducer = (
    state = { campaignList: [] },
    { type, payload }
  ) => {
    switch (type) {
      case CAMPAIGN_REQUEST:
        return {
          loading: true,
        };
      case CAMPAIGN_LIST_SUCCESS:
        return {
          loading: false,
          campaignList: payload,
        };
      case CAMPAIGN_BY_ID_SUCCESS:
        return {
          loading: false,
          campaign: payload,
        };
      case CAMPAIGN_DELETE_SUCCESS:
      case CAMPAIGN_UPDATAE_SUCCESS:
      case CAMPAIGN_SUCCESS:
        return {
          loading: false,
          success: payload,
        };
      case CAMPAIGN_DELETE_FAIL:
      case CAMPAIGN_UPDATE_FAIL:
      case CAMPAIGN_FAIL:
      case CAMPAIGN_LIST_FAIL:
      case CAMPAIGN_BY_ID_FAIL:
        return {
          loading: false,
          campaignList: [],
          campaign: null,
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
  