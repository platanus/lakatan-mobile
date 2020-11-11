import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  slackEntities: [],
  inHooks: [],
  outHooks: [],
};

const slice = createSlice({
  name: 'hooks',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    saveHooks(state, action) {
      state.inHooks = action.payload.inHooks;
      state.outHooks = action.payload.outHooks;
    },
    saveEntities(state, action) {
      state.slackEntities = action.payload;
    },
    finish(state) {
      state.loading = false;
    },
  },
});

export default slice;
export const { actions } = slice;
