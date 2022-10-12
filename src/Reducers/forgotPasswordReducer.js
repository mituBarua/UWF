import {
    FORGOTPASSWORD_REQUEST,
    FORGOTPASSWORD_SUCCESS,
    FORGOTPASSWORD_FAIL,
    CLEAR_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/forgotPasswordConstants";

export const forgotPasswordReducer = (
    state = { },
    { type, payload }
) => {
    switch (type) {
        case FORGOTPASSWORD_REQUEST:
            return {
                loading: true,
            };

        case FORGOTPASSWORD_SUCCESS:
            return {
                loading: false,
                success: payload,
            };

        case FORGOTPASSWORD_FAIL:

            return {
                loading: false,
                
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
