import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slices/authSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const rootReducer = combineReducers({
    auth: authSlice.reducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);