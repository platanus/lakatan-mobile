import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: undefined,
    userName: undefined,
    userEmail: undefined,
    loading: false
}

const slice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        start (state, action) {   // probando el reducer
          state.userName = action.payload.email
        },
        reset () {
            return initialState
        }
    }
})

export default slice
export const actions = slice.actions