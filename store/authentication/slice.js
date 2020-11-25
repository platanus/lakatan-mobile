import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: undefined,
  email: undefined,
  name: undefined,
  loading: false,
  error: undefined,
  success: undefined,
  id: undefined,
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
      state.id = action.payload.id;
    },
    signUpSuccess(state, action) {
      state.success = action.payload;
    },
    signOutSuccess(state, action) {
      state.success = action.payload;
      state.token = undefined;
      state.email = undefined;
      state.name = undefined;
    },
    changePasswordSuccess(state, action) {
      state.success = action.payload;
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
    },
  },
});

export default slice;
export const { actions } = slice;
