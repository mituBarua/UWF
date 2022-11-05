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
  APPEAL_MEDIA_DELETE_SUCCESS,
  APPEAL_MEDIA_DELETE_FAIL,
  APPEAL_PARAGRAPH_DELETE_SUCCESS,
  APPEAL_PARAGRAPH_DELETE_FAIL,
  APPEAL_MEDIA_SUCCESS,
  APPEAL_MEDIA_FAIL,
  APPEAL_PARAGRAPH_FAIL,
  APPEAL_PARAGRAPH_SUCCESS,
  APPEAL_PARAGRAPH_UPDATE_FAIL,
  APPEAL_PARAGRAPH_UPDATE_SUCCESS,
  APPEAL_PARAGRAPH_BY_ID_FAIL,
  APPEAL_PARAGRAPH_BY_ID_SUCCESS,
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

    dispatch({
      type: APPEAL_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: APPEAL_LIST_FAIL, payload: error.response.data });
  }
};

export const getAppealByID = (accessToken,id) => async (dispatch) => {
  try {
    dispatch({ type: APPEAL_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/appeal/${id}`, config);

    dispatch({
      type: APPEAL_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: APPEAL_BY_ID_FAIL, payload: error.response.data });
  }
};

export const getAppealDataByID = (id) => async (dispatch) => {
  try {
    dispatch({ type: APPEAL_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.get(`/appeal/${id}`, config);

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

      const { data } = await api.post(`/appeal_edit/${id}`, appealData, config);
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

export const addAppealMedia =
  (accessToken, mediaData) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post("/media", mediaData, config);
      dispatch({
        type: APPEAL_MEDIA_SUCCESS,
        payload: {
          type: "appeal_media_success",
        },
      });
    } catch (error) {
      dispatch({
        type: APPEAL_MEDIA_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteAppealMedia =
  (accessToken, id, modelId) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post(`/media_delete/${id}`, config);
      dispatch({
        type: APPEAL_MEDIA_DELETE_SUCCESS,
        payload: {
          type: "appeal_delete_media_success",
          modelId,
        },
      });
    } catch (error) {
      dispatch({
        type: APPEAL_MEDIA_DELETE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const addAppealParagraph =
  (accessToken, paragraphData) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post("/paragraph_new", paragraphData, config);
      dispatch({
        type: APPEAL_PARAGRAPH_SUCCESS,
        payload: {
          type: "appeal_paragraph_success",
        },
      });
    } catch (error) {
      dispatch({
        type: APPEAL_PARAGRAPH_FAIL,
        payload: error.response.data,
      });
    }
  };

export const getAppealPargraphByID =
  (accessToken, id) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.get(`/paragraph/${id}`, config);

      dispatch({
        type: APPEAL_PARAGRAPH_BY_ID_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: APPEAL_PARAGRAPH_BY_ID_FAIL,
        payload: error.response.data,
      });
    }
  };

export const updateAppealParagraph =
  (accessToken, paragraphData, id, modelId) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });

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
        type: APPEAL_PARAGRAPH_UPDATE_SUCCESS,
        payload: {
          type: "appeal_paragraph_update_success",
          modelId,
        },
      });
    } catch (error) {
      dispatch({
        type: APPEAL_PARAGRAPH_UPDATE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteAppealParagraph =
  (accessToken, id) => async (dispatch) => {
    try {
      dispatch({ type: APPEAL_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.delete(`/paragraph_delete/${id}`, config);
      dispatch({
        type: APPEAL_PARAGRAPH_DELETE_SUCCESS,
        payload: {
          type: "appeal_paragraph_delete_success",
        },
      });
    } catch (error) {
      dispatch({
        type: APPEAL_PARAGRAPH_DELETE_FAIL,
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
