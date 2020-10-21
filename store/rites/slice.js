import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ritesList: [],
  loading: false,
  currentRite: undefined,
  newRite: {
    id: undefined,
    name: undefined,
    goal: undefined,
    teamId: undefined,
    userMinimum: undefined,
  },
};

const slice = createSlice({
  name: 'rites',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    addNewRite(state, action) {
      state.teams.currentTeam.rites = [...state.teams.currentTeam.rites, action.newRite];
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
