import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: undefined,
  email: undefined,
  name: undefined,
  loading: false,
  error: undefined,
};

const slice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    signInSuccess(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.authentication_token;
    },
    signInError(state, action) {
      state.error = action.payload;
    },
    signUpSuccess(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.authentication_token;
      state.name = action.payload.name;
    },
    signOutSuccess(state) {
      state.token = undefined;
      state.email = undefined;
    },
    clearError(state) {
      state.error = undefined;
    },
    finish(state) {
      state.loading = false;
    },
    reset() {
      return initialState;
    },
  },
});

export default slice;
export const { actions } = slice;
