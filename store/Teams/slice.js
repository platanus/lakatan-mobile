import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamsList: [],
  loading: false,
  currentTeam: { name: "", purpose: "", members: [] },
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
    loadCurrentTeamSuccess(state, action) {
      state.currentTeam = action.payload.team;
    },
    finish(state) {
      state.loading = false;
    },
  },
});

export default slice;
export const { actions } = slice;
