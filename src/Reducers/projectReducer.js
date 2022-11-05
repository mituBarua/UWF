import {
  PROJECT_FAIL,
  PROJECT_SUCCESS,
  PROJECT_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_BY_ID_SUCCESS,
  PROJECT_BY_ID_FAIL,
  PROJECT_UPDATAE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_MEDIA_DELETE_SUCCESS,
  PROJECT_MEDIA_DELETE_FAIL,
  PROJECT_PARAGRAPH_DELETE_SUCCESS,
  PROJECT_PARAGRAPH_DELETE_FAIL,
  PROJECT_MEDIA_SUCCESS,
  PROJECT_MEDIA_FAIL,
  PROJECT_PARAGRAPH_FAIL,
  PROJECT_PARAGRAPH_SUCCESS,
  PROJECT_PARAGRAPH_UPDATE_FAIL,
  PROJECT_PARAGRAPH_UPDATE_SUCCESS,
  PROJECT_PARAGRAPH_BY_ID_FAIL,
  PROJECT_PARAGRAPH_BY_ID_SUCCESS,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
} from "../Constants/projectConstants";

export const projectReducer = (
  state = { projectList: [] },
  { type, payload }
) => {
  switch (type) {
    case PROJECT_REQUEST:
      return {
        loading: true,
      };
    case PROJECT_LIST_SUCCESS:
      return {
        loading: false,
        projectList: payload,
      };
    case PROJECT_BY_ID_SUCCESS:
      return {
        loading: false,
        project: payload,
      };
      case PROJECT_PARAGRAPH_BY_ID_SUCCESS:
        return {
          loading: false,
          projectParagraph: payload,
        };
    case PROJECT_DELETE_SUCCESS:
    case PROJECT_UPDATAE_SUCCESS:
    case PROJECT_PARAGRAPH_SUCCESS:
    case PROJECT_PARAGRAPH_UPDATE_SUCCESS:
    case PROJECT_PARAGRAPH_DELETE_SUCCESS:
    case PROJECT_MEDIA_DELETE_SUCCESS:
    case PROJECT_MEDIA_SUCCESS:
    case PROJECT_SUCCESS:
      return {
        loading: false,
        success: payload,
      };
    case PROJECT_DELETE_FAIL:
    case PROJECT_UPDATE_FAIL:
    case PROJECT_FAIL:
    case PROJECT_MEDIA_FAIL:
    case PROJECT_PARAGRAPH_UPDATE_FAIL:
    case PROJECT_PARAGRAPH_FAIL:
    case PROJECT_PARAGRAPH_DELETE_FAIL:
    case PROJECT_PARAGRAPH_BY_ID_FAIL:
    case PROJECT_MEDIA_DELETE_FAIL:
    case PROJECT_LIST_FAIL:
    case PROJECT_BY_ID_FAIL:
      return {
        loading: false,
        projectList: [],
        project: null,
        projectParagraph:null,
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
