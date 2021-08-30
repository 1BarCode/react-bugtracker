import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses LocalStorage

import auth from "./auth";
import tickets from "./tickets";
import projects from "./projects";

export const rootReducer = combineReducers({
  auth,
  tickets,
  projects,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "tickets", "projects"],
  // blacklist: ["tickets"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
