import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./Reducers/userReducer";
import { projectReducer } from "./Reducers/projectReducer";
import { campaignReducer } from "./Reducers/campaignReducer";
import { appealReducer } from "./Reducers/appealReducer";
import { newsReducer } from "./Reducers/newsReducer";
import { volunteerReducer } from "./Reducers/volunteerReducer";
import { messageReducer } from "./Reducers/messageReducer";

import { resetPasswordReducer } from "./Reducers/resetPasswordReducer";
import { forgotPasswordReducer } from "./Reducers/forgotPasswordReducer";
import { imageGalleryReducer } from "./Reducers/imageGalleryReducer";

const reducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  appeal: appealReducer,
  news: newsReducer,
  campaign: campaignReducer,
  volunteer: volunteerReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  imageGallery: imageGalleryReducer,
  message: messageReducer,
});

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user"],
};

const appReducer = (state, action) => {
  if (action.type === "LOGOUT_USER_SUCCESS") {
    return reducer(undefined, action);
  }

  return reducer(state, action);
};

const rootReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default { store, persistor };
