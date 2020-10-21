import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chosenOnes: [],
  loading: undefined,
};

const slice = createSlice({
  name: 'raffles',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    setChosenOnes(state, action) {
      state.chosenOnes = action.payload;
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
