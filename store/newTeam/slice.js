import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: undefined,
  name: undefined,
  loading: false,
};

const slice = createSlice({
  name: 'newTeam',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    create(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
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
