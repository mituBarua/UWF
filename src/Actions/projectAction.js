import {
  PROJECT_FAIL,
  PROJECT_SUCCESS,
  PROJECT_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_BY_ID_SUCCESS,
  PROJECT_BY_ID_FAIL,
  PROJECT_UPDATAE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/projectConstants";
import { api } from "../Utils/api";

export const getProjectList = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
       
      },
    };

    const { data } = await api.get("/projects", config);
  
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.response.data });
  }
};


export const getProjectByID = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/project/${id}`, config);
    // console.table(data.data);
    dispatch({
      type: PROJECT_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: PROJECT_BY_ID_FAIL, payload: error.response.data });
  }
};

export const createProject = (accessToken, projectData) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.post("/project_new", projectData, config);
   
    dispatch({
      type: PROJECT_SUCCESS,
      payload: {
        type: "project_create_success",
      },
    });
  } catch (error) {
    dispatch({ type: PROJECT_FAIL, payload: error.response.data });
  }
};

export const updateProject =
  (accessToken, id, projectData) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post(
        `/project_edit/${id}`,
        projectData,
        config
      );
      dispatch({
        type: PROJECT_UPDATAE_SUCCESS,
        payload: {
          type: "project_update_success",
        },
      });
    } catch (error) {
      dispatch({ type: PROJECT_UPDATE_FAIL, payload: error.response.data });
    }
  };

export const deleteProject = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.delete(`/project_delete/${id}`, config);
  
    dispatch({
      type: PROJECT_DELETE_SUCCESS,
      payload: {
        type: "project_delete_success",
      },
    });
  } catch (error) {
    dispatch({ type: PROJECT_DELETE_FAIL, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SUCCESS });
};
