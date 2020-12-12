import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
};

const slice = createSlice({
  name: 'rites',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    finish(state) {
      state.loading = false;
    },
    setSuccess(state) {
      state.success = true;
    },
    clearSuccess(state) {
      state.success = false;
    },
    reset(state) {
      state = initialState;
    },
  },
});

export default slice;
export const { actions } = slice;
