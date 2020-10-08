import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ritesList: [],
  loading: false,
  currentRite: undefined,
  newRite: {
    id: undefined,
    name: undefined,
    goal: undefined,
    team_id: undefined,
    user_minimum: undefined,
  },
  chosenOnes: [],
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
    setChosenOnes(state, action) {
      state.chosenOnes = action.payload;
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
