import {
    FORGOTPASSWORD_REQUEST,
    FORGOTPASSWORD_SUCCESS,
    FORGOTPASSWORD_FAIL,
    CLEAR_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/forgotPasswordConstants";
import { api } from "../Utils/api";

export const ForgotPassword = (forgotPasswordData) => async (dispatch) => {
    try {
        dispatch({ type: FORGOTPASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",

            },
        };

        const { data } = await api.post("/forget_password", forgotPasswordData, config);
        
        dispatch({
            type: FORGOTPASSWORD_SUCCESS,
            payload: {
                type: "forgetPassword_success",
            },
        });
    } catch (error) {
        dispatch({ type: FORGOTPASSWORD_FAIL, payload: error.response.data });
    }
    
};
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
  export const clearSuccess = () => async (dispatch) => {
    dispatch({ type: CLEAR_SUCCESS });
  };