import {
  MESSAGE_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_BY_ID_SUCCESS,
  MESSAGE_BY_ID_FAIL,
  MESSAGE_UPDATAE_SUCCESS,
  MESSAGE_UPDATE_FAIL,
  MESSAGE_DELETE_SUCCESS,
  MESSAGE_DELETE_FAIL,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/messageConstants";
import { api } from "../Utils/api";

export const getMessageList = (accessToken) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get("/messages", config);

    dispatch({
      type: MESSAGE_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: MESSAGE_LIST_FAIL, payload: error.response.data });
  }
};

export const getMessageByID = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/message/${id}`, config);
console.log('data',data)
    dispatch({
      type: MESSAGE_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: MESSAGE_BY_ID_FAIL, payload: error.response.data });
  }
};

export const createMessage = ( messageData) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json" 
      },
    };

    const { data } = await api.post("/message_new", messageData, config);

    dispatch({
      type: MESSAGE_SUCCESS,
      payload: {
        type: "message_create_success",
      },
    });
  } catch (error) {
    dispatch({ type: MESSAGE_FAIL, payload: error.response.data });
  }
};


export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SUCCESS });
};
