import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cardReducer"],
};

const persistingReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistingReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
export const persistor = persistStore(store);
