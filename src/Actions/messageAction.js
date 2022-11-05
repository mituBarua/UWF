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

    dispatch({
      type: MESSAGE_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: MESSAGE_BY_ID_FAIL, payload: error.response.data });
  }
};

export const createMessage = (accessToken, messageData) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.post("/appeal_new", messageData, config);

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

// export const updateAppeal =
//   (accessToken, id, appealData) => async (dispatch) => {
//     try {
//       dispatch({ type: APPEAL_REQUEST });

//       const config = {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       };

//       const { data } = await api.post(`/appeal_edit/${id}`, appealData, config);
//       dispatch({
//         type: APPEAL_UPDATAE_SUCCESS,
//         payload: {
//           type: "appeal_update_success",
//         },
//       });
//     } catch (error) {
//       dispatch({ type: APPEAL_UPDATE_FAIL, payload: error.response.data });
//     }
//   };

// export const deleteAppeal = (accessToken, id) => async (dispatch) => {
//   try {
//     dispatch({ type: APPEAL_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };

//     const { data } = await api.delete(`/appeal_delete/${id}`, config);

//     dispatch({
//       type: APPEAL_DELETE_SUCCESS,
//       payload: {
//         type: "appeal_delete_success",
//       },
//     });
//   } catch (error) {
//     dispatch({ type: APPEAL_DELETE_FAIL, payload: error.response.data });
//   }
// };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SUCCESS });
};
