import {
    RESETPASSWORD_REQUEST,
    RESETPASSWORD_SUCCESS,
    RESETPASSWORD_FAIL,
    CLEAR_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/resetPasswordConstants";
import { api } from "../Utils/api";

export const ChangePassword = (resetPasswordData) => async (dispatch) => {
    try {
        dispatch({ type: RESETPASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",

            },
        };

        const { data } = await api.post("/reset_password", resetPasswordData, config);

        dispatch({
            type: RESETPASSWORD_SUCCESS,
            payload: {
                type: "resetPassword_success",
            },
        });
    } catch (error) {
        dispatch({ type: RESETPASSWORD_FAIL, payload: error.response.data });
    }
};
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
  export const clearSuccess = () => async (dispatch) => {
    dispatch({ type: CLEAR_SUCCESS });
  };