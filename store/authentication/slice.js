import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: undefined,
    userName: undefined,
    userEmail: undefined,
    loading: false,
    error: undefined
}

const slice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        start (state) {   
            state.loading = true
           // console.log("start")
        },
        finish (state) {
            state.loading = false
            // console.log("finish")
        },
        reset () {
            return initialState
        }
    }
})

export default slice
export const actions = slice.actions