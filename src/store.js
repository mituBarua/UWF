import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./Reducers/userReducer";

const reducer = combineReducers({
  user: userReducer,
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
