import {
  PROJECT_FAIL,
  PROJECT_SUCCESS,
  PROJECT_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_BY_ID_SUCCESS,
  PROJECT_BY_ID_FAIL,
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
