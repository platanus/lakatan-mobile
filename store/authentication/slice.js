import { createSlice } from '@reduxjs/toolkit';
import { Image } from 'react-native';
import defaultImage from '../../assets/user.png';

const initialState = {
  token: undefined,
  email: undefined,
  name: undefined,
  loading: false,
  error: undefined,
  success: undefined,
  imageProfile: Image.resolveAssetSource(defaultImage).uri,
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
      // state.imageProfile = Image.resolveAssetSource(defaultImage).uri;
      // console.log(state.imageProfile);
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
    updateImageProfile(state, action) {
      state.imageProfile = action.payload;
    },
    changePasswordSuccess(state, action) {
      state.success = action.payload;
    },
    clearSuccess(state) {
      state.success = undefined;
    },
    changeNameSuccess(state, action) {
      state.name = action.payload.name;
    },
    refreshProfile(state, action) {
      state.name = action.payload.data.attributes.name;
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
