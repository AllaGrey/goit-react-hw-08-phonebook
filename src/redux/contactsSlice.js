import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './operations'

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
//   extraReducers: {
//     [fetchContacts.pending](state, action) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
// },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload; 
//     },
//     [addContact.pending](state, action) {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload)
//     },
//     [addContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteContact.pending](state, action) {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const deleteIndex = state.items.findIndex(item => item.id === action.payload.id);
//       state.items.splice(deleteIndex, 1);
//     }
//   }
})

export const contactsSliceReducer = contactsSlice.reducer
