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

export const donationReducer = (
  state = { donationList: [] },
  { type, payload }
) => {
  switch (type) {
    case DONATION_REQUEST:
      return {
        loading: true,
      };
    case DONATION_LIST_SUCCESS:
      return {
        loading: false,
        donationList: payload,
      };
    case DONATION_BY_ID_SUCCESS:
      return {
        loading: false,
        donation: payload,
      };
    case DONATION_SUCCESS:
      return {
        loading: false,
        success: payload,
      };
    case DONATION_FAIL:
    case DONATION_LIST_FAIL:
    case DONATION_BY_ID_FAIL:
      return {
        loading: false,
        donationList: [],
        donation: null,
        error: payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
};
