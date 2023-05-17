import { createSlice } from "@reduxjs/toolkit"
import { register, logIn, logOut, refreshUser } from "./authOperations"

const resetState = (state) => {
    state.user = null
    state.token = null
    state.isLoggedIn = false
    state.isRefreshing = false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {name: null, email: null},
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) => builder.addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
    }).addCase(register.rejected, (state, action) => {
        state.error = action.payload.error
    }).addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
    }).addCase(logOut.fulfilled, (state, action) => {
        resetState(state)
    }).addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
})

export const authSliceReducer = authSlice.reducer