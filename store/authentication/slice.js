import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: undefined,
  email: undefined,
  name: undefined,
  loading: false,
  error: undefined,
  success: undefined,
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
      state.token = action.payload.authenticationToken;
    },
    signUpSuccess(state, action) {
      state.success = action.payload;
    },
    signOutSuccess(state) {
      state.token = undefined;
      state.email = undefined;
    },
    clearSuccess(state) {
      state.success = undefined;
    },
    authError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = undefined;
    },
    finish(state) {
      state.loading = false;
    },
    reset(state) {
      state.token = undefined;
      state.email = undefined;
      state.name = undefined;
      state.loading = false;
      state.error = undefined;
    },
  },
});

export default slice;
export const { actions } = slice;
