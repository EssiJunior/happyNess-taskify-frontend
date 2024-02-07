// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REDUX IMPORTS
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// REDUCERS
import authReducer from "./slices/authSlice";
import tasksReducer from "./slices/tasksSlice";

// PERSIST THE STORE
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

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
});