import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: undefined,
    email: undefined,
    loading: false,
}

const slice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        start (state) {   
            state.loading = true
        },
        signInSuccess (state, action) {
            state.email = action.payload.email
            state.token = action.payload.authentication_token
        },
        finish (state) {
            state.loading = false
        },
        reset () {
            return initialState
        }
    }
})

export default slice
export const actions = slice.actions