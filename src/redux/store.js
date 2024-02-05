import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import tasksReducer from "./slices/tasksSlice";

//persit our store
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

//reducers
const reducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});