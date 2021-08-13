import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import { rootReducer, persistedReducer } from "../reducers";

export const store = createStore(
  persistedReducer,
  composeWithDevTools(compose(applyMiddleware(thunk)))
);

export const normStore = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(thunk)))
);

export const persistor = persistStore(store);
