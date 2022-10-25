import {
    IMAGEGALLERY_FAIL,
    IMAGEGALLERY_SUCCESS,
    IMAGEGALLERY_REQUEST,
    IMAGEGALLERY_LIST_SUCCESS,
    IMAGEGALLERY_LIST_FAIL,
   
    CLEAR_ERRORS,
    CLEAR_SUCCESS,
  } from "../Constants/imageGalleryConstants";
  import { api } from "../Utils/api";
  
  export const getGalleryImageList = () => async (dispatch) => {
    try {
      dispatch({ type: IMAGEGALLERY_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
       
        },
      };
  
      const { data } = await api.get("/image_gallery", config);
     
      dispatch({
        type: IMAGEGALLERY_LIST_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: IMAGEGALLERY_LIST_FAIL, payload: error.response.data });
    }
  };
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
  export const clearSuccess = () => async (dispatch) => {
    dispatch({ type: CLEAR_SUCCESS });
  };
  