import {
    RESETPASSWORD_REQUEST,
    RESETPASSWORD_SUCCESS,
    RESETPASSWORD_FAIL,
    CLEAR_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/resetPasswordConstants";

export const resetPasswordReducer = (
    state = { },
    { type, payload }
) => {
    switch (type) {
        case RESETPASSWORD_REQUEST:
            return {
                loading: true,
            };

        case RESETPASSWORD_SUCCESS:
            return {
                loading: false,
                success: payload,
            };

        case RESETPASSWORD_FAIL:

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
