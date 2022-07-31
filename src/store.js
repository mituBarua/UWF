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
  
const reducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  appeal:appealReducer,
  news:newsReducer,
  campaign: campaignReducer
});

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user"],
};

const rootReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default { store, persistor };
