import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null,
    isLogged: false,
    isLoading: false,
    token: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers:{
        startLoading: (state) => {
            state.isLoading = true
        },
        setToken: (state, action) => {        
           state.token = action.payload
        },
        setUser: (state, action) => { 
            state.isLoading = false;
            state.user = action.payload;
            state.isLogged = true;
        },
        logout: (state) => {
            localStorage.removeItem('access_token')
            state.user = null;
            state.token = '';
            state.isLogged = false;
        }
    }
});

export const { startLoading, setToken, setUser, logout} = authSlice.actions