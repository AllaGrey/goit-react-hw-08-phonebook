import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";
import { filterSliceReducer } from "./filterSlice";
import { authSliceReducer } from "./auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSliceReducer),
        contacts: contactsSliceReducer,
        filter: filterSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);