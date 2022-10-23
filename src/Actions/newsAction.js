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
  NEWS_MEDIA_DELETE_FAIL,
  NEWS_MEDIA_DELETE_SUCCESS,
  NEWS_PARAGRAPH_BY_ID_FAIL,
  NEWS_PARAGRAPH_BY_ID_SUCCESS,
  NEWS_PARAGRAPH_DELETE_FAIL,
  NEWS_PARAGRAPH_DELETE_SUCCESS,
  NEWS_PARAGRAPH_FAIL,
  NEWS_PARAGRAPH_SUCCESS,
  NEWS_PARAGRAPH_UPDATE_FAIL,
  NEWS_PARAGRAPH_UPDATE_SUCCESS,
  NEWS_MEDIA_FAIL,
  NEWS_MEDIA_SUCCESS,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/newsConstants";
import { api } from "../Utils/api";

export const getNewsList = (accessToken) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get("/news", config);
    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: NEWS_LIST_FAIL, payload: error.response.data });
  }
};

export const getNewsByID = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/news/${id}`, config);
    // console.table(data.data);
    dispatch({
      type: NEWS_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: NEWS_BY_ID_FAIL, payload: error.response.data });
  }
};

export const createNews = (accessToken, newsData) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.post("/news_new", newsData, config);

    dispatch({
      type: NEWS_SUCCESS,
      payload: {
        type: "news_create_success",
      },
    });
  } catch (error) {
    dispatch({ type: NEWS_FAIL, payload: error.response.data });
  }
};

export const updateNews = (accessToken, id, newsData) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.post(`/news_edit/${id}`, newsData, config);
    dispatch({
      type: NEWS_UPDATAE_SUCCESS,
      payload: {
        type: "news_update_success",
      },
    });
  } catch (error) {
    dispatch({ type: NEWS_UPDATE_FAIL, payload: error.response.data });
  }
};

export const deleteNews = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.delete(`/news_delete/${id}`, config);

    dispatch({
      type: NEWS_DELETE_SUCCESS,
      payload: {
        type: "news_delete_success",
      },
    });
  } catch (error) {
    dispatch({ type: NEWS_DELETE_FAIL, payload: error.response.data });
  }
};

export const addNewsMedia = (accessToken, mediaData) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.post("/media", mediaData, config);
    dispatch({
      type: NEWS_MEDIA_SUCCESS,
      payload: {
        type: "news_media_success",
      },
    });
  } catch (error) {
    dispatch({
      type: NEWS_MEDIA_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteNewsMedia =
  (accessToken, id, modelId) => async (dispatch) => {
    try {
      dispatch({ type: NEWS_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post(`/media_delete/${id}`, config);
      dispatch({
        type: NEWS_MEDIA_DELETE_SUCCESS,
        payload: {
          type: "news_delete_media_success",
          modelId,
        },
      });
    } catch (error) {
      dispatch({
        type: NEWS_MEDIA_DELETE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const addNewsParagraph =
  (accessToken, paragraphData) => async (dispatch) => {
    try {
      dispatch({ type: NEWS_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post("/paragraph_new", paragraphData, config);
      dispatch({
        type: NEWS_PARAGRAPH_SUCCESS,
        payload: {
          type: "news_paragraph_success",
        },
      });
    } catch (error) {
      dispatch({
        type: NEWS_PARAGRAPH_FAIL,
        payload: error.response.data,
      });
    }
  };

export const getNewsPargraphByID = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/paragraph/${id}`, config);

    dispatch({
      type: NEWS_PARAGRAPH_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_PARAGRAPH_BY_ID_FAIL,
      payload: error.response.data,
    });
  }
};

export const updateNewsParagraph =
  (accessToken, paragraphData, id, modelId) => async (dispatch) => {
    try {
      dispatch({ type: NEWS_REQUEST });

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
        type: NEWS_PARAGRAPH_UPDATE_SUCCESS,
        payload: {
          type: "news_paragraph_update_success",
          modelId,
        },
      });
    } catch (error) {
      dispatch({
        type: NEWS_PARAGRAPH_UPDATE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteNewsParagraph = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await api.delete(`/paragraph_delete/${id}`, config);
    dispatch({
      type: NEWS_PARAGRAPH_DELETE_SUCCESS,
      payload: {
        type: "campaign_paragraph_delete_success",
      },
    });
  } catch (error) {
    dispatch({
      type: NEWS_PARAGRAPH_DELETE_FAIL,
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
