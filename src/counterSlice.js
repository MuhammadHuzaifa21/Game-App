import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 1
    },
    reducers: {
        inc: (state) => {
            state.count += 1
        },
        dec: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        }
    }
});

export const { inc, dec, reset } = counterSlice.actions;
export default counterSlice.reducer