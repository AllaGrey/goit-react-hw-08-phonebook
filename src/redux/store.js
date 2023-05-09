import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsSlice";
import { filterSliceReducer } from "./filterSlice";


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});