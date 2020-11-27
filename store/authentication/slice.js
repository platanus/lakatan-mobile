import { createSlice } from '@reduxjs/toolkit';
import { Image } from 'react-native';
import defaultImage from '../../assets/user.png';

const bucket = 'https://bucketeer-60eb4403-f79d-491b-9dd5-066f00fac05c.s3.amazonaws.com/';
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
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.authenticationToken;
      state.id = action.payload.id;
      if (action.payload.pictureData !== null) {
        console.log("datos ",action.payload);
        const picdata = JSON.parse(action.payload.picture);
        const link = `${bucket}${picdata.id}`;
        state.imageProfile = link;
        console.log("url ",state.imageProfile);
      }
    },
    signUpSuccess(state, action) {
      state.success = action.payload;
    },
    signOutSuccess(state, action) {
      state.success = action.payload;
      state.token = undefined;
      state.email = undefined;
      state.name = undefined;
      state.imageProfile = Image.resolveAssetSource(defaultImage).uri;
    },
    updateImageProfile(state, action) {
      state.success = 'uploaded';
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
      if (action.payload.data.attributes.picture !== null) {
        const picdata = action.payload.data.attributes.picture;
        const link = `${bucket}${picdata.id}`;
        state.imageProfile = link;
      }
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
      state.imageProfile = Image.resolveAssetSource(defaultImage).uri;
    },
  },
});

export default slice;
export const { actions } = slice;
