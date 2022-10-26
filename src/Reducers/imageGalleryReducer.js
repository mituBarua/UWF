import {
    IMAGEGALLERY_FAIL,
    IMAGEGALLERY_SUCCESS,
    IMAGEGALLERY_REQUEST,
    IMAGEGALLERY_LIST_SUCCESS,
    IMAGEGALLERY_LIST_FAIL,

    CLEAR_ERRORS,
    CLEAR_SUCCESS,
} from "../Constants/imageGalleryConstants";

export const imageGalleryReducer = (
    state = { GalleryList: [] },
    { type, payload }
) => {
    switch (type) {
        case IMAGEGALLERY_REQUEST:
            return {
                loading: true,
            };
        case IMAGEGALLERY_SUCCESS:
        case IMAGEGALLERY_LIST_SUCCESS:
            return {
                loading: false,
                GalleryList: payload,
            };
        case IMAGEGALLERY_FAIL:
        case IMAGEGALLERY_LIST_FAIL:

            return {
                loading: false,
                GalleryList: [],
                gallery: null,
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
