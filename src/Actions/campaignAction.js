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
  import { api } from "../Utils/api";
  
  export const getCampaignList = (accessToken) => async (dispatch) => {
    try {
      dispatch({ type: CAMPAIGN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const { data } = await api.get("/campaigns", config);
      dispatch({
        type: CAMPAIGN_LIST_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CAMPAIGN_LIST_FAIL, payload: error.response.data });
    }
  };
  
  export const getCampaignByID = (accessToken, id) => async (dispatch) => {
    try {
      dispatch({ type: CAMPAIGN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const { data } = await api.get(`/campaign/${id}`, config);
      // console.table(data.data);
      dispatch({
        type: CAMPAIGN_BY_ID_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CAMPAIGN_BY_ID_FAIL, payload: error.response.data });
    }
  };
  
  export const createCampaign = (accessToken, campaignData) => async (dispatch) => {
    try {
      dispatch({ type: CAMPAIGN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const { data } = await api.post("/campaign_new", campaignData, config);
      console.log(data);
      dispatch({
        type: CAMPAIGN_SUCCESS,
        payload: {
          type: "campaign_create_success",
        },
      });
    } catch (error) {
      dispatch({ type: CAMPAIGN_FAIL, payload: error.response.data });
    }
  };
  
  export const updateCampaign =
    (accessToken, id, campaignData) => async (dispatch) => {
      try {
        dispatch({ type: CAMPAIGN_REQUEST });
  
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        };
  
        const { data } = await api.post(
          `/campaign_edit/${id}`,
          campaignData,
          config
        );
        dispatch({
          type: CAMPAIGN_UPDATAE_SUCCESS,
          payload: {
            type: "campaign_update_success",
          },
        });
      } catch (error) {
        dispatch({ type: CAMPAIGN_UPDATE_FAIL, payload: error.response.data });
      }
    };
  
  export const deleteCampaign = (accessToken, id) => async (dispatch) => {
    try {
      dispatch({ type: CAMPAIGN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const { data } = await api.delete(`/campaign_delete/${id}`, config);
      dispatch({
        type: CAMPAIGN_DELETE_SUCCESS,
        payload: {
          type: "campaign_delete_success",
        },
      });
    } catch (error) {
      dispatch({ type: CAMPAIGN_DELETE_FAIL, payload: error.response.data });
    }
  };
  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
  export const clearSuccess = () => async (dispatch) => {
    dispatch({ type: CLEAR_SUCCESS });
  };
  