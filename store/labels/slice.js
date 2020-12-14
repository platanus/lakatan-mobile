import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allLabels: [],
  userLabels: [],
  loading: false,
};

const slice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    getAllLabels(state, action) {
      state.allLabels = action.payload;
    },
    getUserLabels(state, action) {
      state.userLabels = action.payload;
    },
    finish(state) {
      state.loading = false;
    },
  },
});

export default slice;
export const { actions } = slice;
