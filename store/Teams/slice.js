import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamsList: [],
  loading: false,
};

const slice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    loadTeamsSuccess(state, action) {
      state.teamsList = action.payload.teams;
    },
    finish(state) {
      state.loading = false;
    },
  },
});

export default slice;
export const { actions } = slice;
