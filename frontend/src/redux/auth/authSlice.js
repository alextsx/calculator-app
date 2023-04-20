import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    user : null,
    accessToken : null,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setCredentials : (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        deleteCredentials : (state) => {
            state.user = null;
            state.accessToken = null;
        }
    }
});


export const {setCredentials, deleteCredentials} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
/*export const selectAccessToken = (state) => state.auth.accessToken; */

export default authSlice.reducer;