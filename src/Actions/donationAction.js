import {
  DONATION_REQUEST,
  DONATION_BY_ID_FAIL,
  DONATION_BY_ID_SUCCESS,
  DONATION_LIST_SUCCESS,
  DONATION_LIST_FAIL,
  DONATION_FAIL,
  DONATION_SUCCESS,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/donationConstants";
import { api } from "../Utils/api";

export const getDonationList = (accessToken) => async (dispatch) => {
  try {
    dispatch({ type: DONATION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get("/donations", config);

    dispatch({
      type: DONATION_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: DONATION_LIST_FAIL, payload: error.response.data });
  }
};

export const getDonationByID = (accessToken, id) => async (dispatch) => {
  try {
    dispatch({ type: DONATION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await api.get(`/donation/${id}`, config);

    dispatch({
      type: DONATION_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: DONATION_BY_ID_FAIL, payload: error.response.data });
  }
};

export const createDonation = (donationData) => async (dispatch) => {
  try {
    dispatch({ type: DONATION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post("/donation_new", donationData, config);
    console.log(data, 'donation');
    dispatch({
      type: DONATION_SUCCESS,
      payload: {
        type: "donation_create_success",
        url: data.url
      },
    });
  } catch (error) {
    dispatch({ type: DONATION_FAIL, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SUCCESS });
};
