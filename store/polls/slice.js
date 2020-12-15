import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  polls: [],
  currentPoll: undefined,
  confirmation: false,
  loading: undefined,
};

const slice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    setPolls(state, action) {
      state.currentPoll = undefined;
      state.polls = action.payload;
    },
    setPoll(state, action) {
      state.currentPoll = action.payload;
    },
    appendPoll(state, action) {
      state.polls = [...state.polls, action.payload];
    },
    confirmaded(state) {
      state.confirmation = true;
    },
    listPolls(state) {
      state.currentPoll = undefined;
    }
    ,
    finish(state) {
      state.confirmation = false;
      state.loading = false;
    },
    reset(state) {
      state = initialState;
    },
  },
});

export default slice;
export const { actions } = slice;
