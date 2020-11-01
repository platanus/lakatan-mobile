import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  workspace: 'Platanus',
  step1changes: [],
  step2changes: [],
  success: false,
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
    saveSuccess(state) {
      state.success = true;
    },
    setWorkspace(state, action) {
      state.workspace = action.payload.payload.workspace;
    },
    finish(state) {
      state.loading = false;
    },
    reset(state) {
      state.loading = false;
      state.step1changes = [];
      state.step2changes = [];
      state.success = false;
    },
  },
});

export default slice;
export const { actions } = slice;
