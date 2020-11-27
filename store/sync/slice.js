import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  workspace: '',
  step1changes: [],
  step2changes: [],
  success: false,
  error: false,
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
    success(state) {
      state.error = false;
      state.success = true;
    },
    setWorkspace(state, action) {
      state.workspace = action.payload.slackWorkspaceName;
    },
    createError(state) {
      state.error = true;
    },
    cleanError(state) {
      state.error = false;
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
    resetSuccess(state) {
      state.success = false;
      state.error = false;
    },
    clearWorkspace(state) {
      state.workspace = '';
    },
  },
});

export default slice;
export const { actions } = slice;
