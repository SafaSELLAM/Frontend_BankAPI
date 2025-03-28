import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"

//create store redux
export const store = configureStore({
    // add reducer auth so it can be used in the app
    reducer: {
        auth: authReducer,
    }
})