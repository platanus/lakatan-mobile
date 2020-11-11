import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    reset(state) {
      state = initialState;
    },
  },
});

export default slice;
export const { actions } = slice;
