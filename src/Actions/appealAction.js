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
  import { api } from "../Utils/api";
  
  export const getAppealList = () => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
       
        },
      };
  
      const { data } = await api.get("/appeals", config);
      console.log('appeal list',data);
      dispatch({
        type: APPEAL_LIST_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: APPEAL_LIST_FAIL, payload: error.response.data });
    }
  };
  


  export const getAppealByID = ( id) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };
  
      const { data } = await api.get(`/appeal/${id}`, config);
     console.log(data,'sfdsfdsfds');
      dispatch({
        type: APPEAL_BY_ID_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: APPEAL_BY_ID_FAIL, payload: error.response.data });
    }
  };
  
  export const createAppeal = (accessToken, appealData) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const { data } = await api.post("/appeal_new", appealData, config);
     
      dispatch({
        type: APPEAL_SUCCESS,
        payload: {
          type: "appeal_create_success",
        },
      });
    } catch (error) {
      dispatch({ type: APPEAL_FAIL, payload: error.response.data });
    }
  };
  
  export const updateAppeal =
    (accessToken, id, appealData) => async (dispatch) => {
      try {
        dispatch({ type: APPEAL_REQUEST });
  
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        };
  
        const { data } = await api.post(
          `/appeal_edit/${id}`,
          appealData,
          config
        );
        console.log('update appeal',data);
        dispatch({
          type: APPEAL_UPDATAE_SUCCESS,
          payload: {
            type: "appeal_update_success",
          },
        });
      } catch (error) {
        dispatch({ type: APPEAL_UPDATE_FAIL, payload: error.response.data });
      }
    };
  
  export const deleteAppeal = (accessToken, id) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const { data } = await api.delete(`/appeal_delete/${id}`, config);
     
      dispatch({
        type: APPEAL_DELETE_SUCCESS,
        payload: {
          type: "appeal_delete_success",
        },
      });
    } catch (error) {
      dispatch({ type: APPEAL_DELETE_FAIL, payload: error.response.data });
    }
  };
  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
  export const clearSuccess = () => async (dispatch) => {
    dispatch({ type: CLEAR_SUCCESS });
  };
  