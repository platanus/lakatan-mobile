import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    get(state, action) {
      state.users = action.payload.data.data;
    },
    finish(state) {
      state.loading = false;
    },
    reset() {
      return initialState;
    },
  },
});

export default slice;
export const { actions } = slice;
