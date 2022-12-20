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
  PROJECT_MEDIA_DELETE_SUCCESS,
  PROJECT_MEDIA_DELETE_FAIL,
  PROJECT_PARAGRAPH_DELETE_SUCCESS,
  PROJECT_PARAGRAPH_DELETE_FAIL,
  PROJECT_MEDIA_SUCCESS,
  PROJECT_MEDIA_FAIL,
  PROJECT_PARAGRAPH_FAIL,
  PROJECT_PARAGRAPH_SUCCESS,
  PROJECT_PARAGRAPH_UPDATE_FAIL,
  PROJECT_PARAGRAPH_UPDATE_SUCCESS,
  PROJECT_PARAGRAPH_BY_ID_FAIL,
  PROJECT_PARAGRAPH_BY_ID_SUCCESS,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/projectConstants";
import { api } from "../Utils/api";

export const getProjectList = (accessToken) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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

export const getWebProjectList = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
       
      },
    };

    const { data } = await api.get("/web_projects", config);
  
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
   
    dispatch({
      type: PROJECT_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: PROJECT_BY_ID_FAIL, payload: error.response.data });
  }
};
export const getProjectDataByID = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    const { data } = await api.get(`/project/${id}`, config);
   
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

export const addProjectMedia =
  (accessToken, mediaData) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post("/media", mediaData, config);
     
      dispatch({
        type: PROJECT_MEDIA_SUCCESS,
        payload: {
          type: "project_media_success",
        },
      });
    } catch (error) {
      dispatch({
        type: PROJECT_MEDIA_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteProjectMedia =
  (accessToken, id, modelId) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post(`/media_delete/${id}`, config);
      dispatch({
        type: PROJECT_MEDIA_DELETE_SUCCESS,
        payload: {
          type: "project_delete_media_success",
          modelId,
        },
      });
    } catch (error) {
      dispatch({
        type: PROJECT_MEDIA_DELETE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const addProjectParagraph =
  (accessToken, paragraphData) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post("/paragraph_new", paragraphData, config);
      dispatch({
        type: PROJECT_PARAGRAPH_SUCCESS,
        payload: {
          type: "project_paragraph_success",
        },
      });
    } catch (error) {
      dispatch({
        type: PROJECT_PARAGRAPH_FAIL,
        payload: error.response.data,
      });
    }
  };

export const getProjectPargraphByID =
  (accessToken, id) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.get(`/paragraph/${id}`, config);

      dispatch({
        type: PROJECT_PARAGRAPH_BY_ID_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: PROJECT_PARAGRAPH_BY_ID_FAIL,
        payload: error.response.data,
      });
    }
  };

export const updateProjectParagraph =
  (accessToken, paragraphData, id, modelId) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post(
        `/paragraph_edit/${id}`,
        paragraphData,
        config
      );
      dispatch({
        type: PROJECT_PARAGRAPH_UPDATE_SUCCESS,
        payload: {
          type: "project_paragraph_update_success",
          modelId,
        },
      });
    } catch (error) {
      dispatch({
        type: PROJECT_PARAGRAPH_UPDATE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteProjectParagraph =
  (accessToken, id) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.delete(`/paragraph_delete/${id}`, config);
      dispatch({
        type: PROJECT_PARAGRAPH_DELETE_SUCCESS,
        payload: {
          type: "project_paragraph_delete_success",
        },
      });
    } catch (error) {
      dispatch({
        type: PROJECT_PARAGRAPH_DELETE_FAIL,
        payload: error.response.data,
      });
    }
  };


export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SUCCESS });
};
