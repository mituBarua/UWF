import {
  PROJECT_FAIL,
  PROJECT_SUCCESS,
  PROJECT_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  CLEAR_ERRORS,
} from "../Constants/projectConstants";
import { api } from "../Utils/api";

export const projectReducer = (state = { projectList: [] }, { type, payload }) => {
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
    case PROJECT_LIST_FAIL:
    case PROJECT_LIST_FAIL:
      return {
        loading: false,
        projectList: [],
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
