import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from '../redux/contactsOperations'


const initialState = {
  items: [],
  isLoading: false,
  error: null,
}

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const handlePending = (state) => {
  state.isLoading = true;
} 

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => builder
    .addCase(fetchContacts.fulfilled,(state, action) => {
      state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload)
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      const deleteIndex = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(deleteIndex, 1);
    })
    .addMatcher(getActions('pending'), handlePending)
    .addMatcher(getActions('fulfilled'), handleFulfilled)
    .addMatcher(getActions('rejected'), handleRejected)
})

export const contactsSliceReducer = contactsSlice.reducer