import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItem: localStorage.getItem("totleItem") ? JSON.parse(localStorage.getItem("totleItem")) : null
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setTotalItem(state, action) {
            state.token = action.payload;
            localStorage.setItem("totalItem", JSON.stringify(action.payload));
        },
    }
});

export const { setTotalItem } = authSlice.actions;
export default authSlice.reducer;
