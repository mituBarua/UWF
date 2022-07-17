import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
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

    const { data } = await api.post("/authaccount/login", userData, config);

    if (data.message == "success")
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    else dispatch({ type: LOGIN_USER_FAIL, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error });
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
      "/authaccount/registration",
      userData,
      config
    );

    if (data.message == "success")
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    else dispatch({ type: REGISTER_USER_FAIL, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAIL, payload: error });
  }
};
