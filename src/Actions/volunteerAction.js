import {
  VOLUNTEER_FAIL,
  VOLUNTEER_SUCCESS,
  VOLUNTEER_REQUEST,
  VOLUNTEER_LIST_SUCCESS,
  VOLUNTEER_LIST_FAIL,
  VOLUNTEER_BY_ID_SUCCESS,
  VOLUNTEER_BY_ID_FAIL,
  VOLUNTEER_UPDATAE_SUCCESS,
  VOLUNTEER_UPDATE_FAIL,
  VOLUNTEER_DELETE_SUCCESS,
  VOLUNTEER_DELETE_FAIL,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/volunteerConstants";
import { api } from "../Utils/api";

export const getVolunteerList = () => async (dispatch) => {
  try {
    dispatch({ type: VOLUNTEER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.get("/volunteers", config);
    dispatch({
      type: VOLUNTEER_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: VOLUNTEER_LIST_FAIL, payload: error.response.data });
  }
};

export const getVolunteerByID = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: VOLUNTEER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/volunteer/${id}`, config);

    dispatch({
      type: VOLUNTEER_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: VOLUNTEER_BY_ID_FAIL, payload: error.response.data });
  }
};

export const createVolunteer =
  (accessToken, volunteerData) => async (dispatch) => {
    try {
      dispatch({ type: VOLUNTEER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post("/volunteer_new", volunteerData, config);

      dispatch({
        type: VOLUNTEER_SUCCESS,
        payload: {
          type: "volunteer_create_success",
        },
      });
    } catch (error) {
      dispatch({ type: VOLUNTEER_FAIL, payload: error.response.data });
    }
  };

export const createDataVolunteer =
  (volunteerData) => async (dispatch) => {
    try {
      dispatch({ type: VOLUNTEER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",

        },
      };

      const { data } = await api.post("/volunteer_new", volunteerData, config);

      dispatch({
        type: VOLUNTEER_SUCCESS,
        payload: {
          type: "volunteer_create_success",
        },
      });
    } catch (error) {
      dispatch({ type: VOLUNTEER_FAIL, payload: error.response.data });
    }
  };

export const updateVolunteer =
  (accessToken, id, volunteerData) => async (dispatch) => {
    try {
      dispatch({ type: VOLUNTEER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await api.post(
        `/volunteer_edit/${id}`,
        volunteerData,
        config
      );
      dispatch({
        type: VOLUNTEER_UPDATAE_SUCCESS,
        payload: {
          type: "volunteer_update_success",
        },
      });
    } catch (error) {
      dispatch({ type: VOLUNTEER_UPDATE_FAIL, payload: error.response.data });
    }
  };

export const deleteVolunteer = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: VOLUNTEER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.delete(`/volunteer_delete/${id}`, config);

    dispatch({
      type: VOLUNTEER_DELETE_SUCCESS,
      payload: {
        type: " volunteer_delete_success",
      },
    });
  } catch (error) {
    dispatch({ type: VOLUNTEER_DELETE_FAIL, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SUCCESS });
};
