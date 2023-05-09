import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";
import { filterSliceReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsSliceReducer,
        filter: filterSliceReducer,
    }
});