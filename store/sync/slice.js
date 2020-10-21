import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  step1changes: [],
  step2changes: [],
};

const slice = createSlice({
  name: 'sync',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    saveChanges(state, action) {
      state.step1changes = action.payload.firstStep;
      state.step2changes = action.payload.secondStep;
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
