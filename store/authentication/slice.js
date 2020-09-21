import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'authentication',
    initialState: {
        token: undefined,
        userName: undefined,
        loading: false,
    },
    reducers: {
        start (state) {   // probando el reducer
           state.loading = !state.loading
        }
    }
})


export default slice
export const actions = slice.actions