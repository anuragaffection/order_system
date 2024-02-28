import { createSlice } from "@reduxjs/toolkit";

const authInitialState = false;

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        modifyAuth: (state, action) => {
            return action.payload;
        }
    }
})

export const { modifyAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;

export default authReducer;