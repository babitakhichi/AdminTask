import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";


import config from "../config";
import authSlice from "./AuthSlice/index.slice";


const RootReducer = combineReducers({
  auth: authSlice,
});

const encryptor = encryptTransform({
  secretKey: `${config.NAME_KEY}-storage`,
  onError: (error) => {
   
    console.log({ error });
  },
});

const persistConfig = {
  key: config.NAME_KEY,
  storage,
  whitelist: ["auth", "profile"],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) =>  getDefaultMiddleware({
    
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: config.NODE_ENV !== "production",
});

export default store;

export const Persistor = persistStore(store);
