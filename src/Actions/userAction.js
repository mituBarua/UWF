import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  CLEAR_SUCCESS,
  CLEAR_ERRORS,
  USER_REQUEST,
  USER_BY_ID_SUCCESS,
  USER_BY_ID_FAIL,
  USER_UPDATAE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  NEW_USER_REQUEST,
} from "../Constants/userConstants";
import { api } from "../Utils/api";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post("/login", userData, config);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data });
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post(
      "/signup",
      userData,
      config
    );


    dispatch({ type: REGISTER_USER_SUCCESS, payload:  {}});

  } catch (error) {
    dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data });
  }
};

export const createUser = (accessToken, userData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.post("/user_new", userData, config);

    dispatch({
      type: USER_SUCCESS,
      payload: {
        type: "user_create_success",
      },
    });
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data });
  }
};

export const getUserList = (accessToken) => async (dispatch) => {
  try {
    dispatch({ type: NEW_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get("/users", config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.response.data });
  }
};

export const updateUser = (accessToken, id, userData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.post(`/user_edit/${id}`, userData, config);
    dispatch({
      type: USER_UPDATAE_SUCCESS,
      payload: {
        type: "user_update_success",
      },
    });
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.response.data });
  }
};

export const getUserByID = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: NEW_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/user/${id}`, config);

    dispatch({
      type: USER_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: USER_BY_ID_FAIL, payload: error.response.data });
  }
};

export const deleteUser = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: NEW_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.delete(`/user_delete/${id}`, config);
    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: {
        type: "user_delete_success",
      },
    });
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SUCCESS });
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER_SUCCESS });
};
