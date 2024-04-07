import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducers from "./slices/todoSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducers);

export const store = configureStore({
  reducer: {
    todo: persistedReducer,
  },
});

export const persistor = persistStore(store);
