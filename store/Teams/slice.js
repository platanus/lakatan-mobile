import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamsList: [],
  loading: false,
  currentTeam: {
    name: '', purpose: '', members: [], rites: [],
  },
  newTeam: {
    id: undefined,
    name: undefined,
    loading: false,
  },
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
    addNewTeam(state, action) {
      state.teamsList = [...state.teamsList, action.payload.newTeam];
    },
    finish(state) {
      state.loading = false;
    },
  },
});

export default slice;
export const { actions } = slice;
