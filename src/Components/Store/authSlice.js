import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token")

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: token || null,
        isAuthenticated: !!token,
        user: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem("token", action.payload.token)
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        },
        setUser: (state, action) => {
            state.user = action.payload;

        },

        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload }
        },
    },
})

export const { loginSuccess, logout, setUser, updateUser } = authSlice.actions
export default authSlice.reducer