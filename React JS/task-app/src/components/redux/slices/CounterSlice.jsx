import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setIncrement: (state, action) => {
            state.count += 1;
        },
        setDecrement: (state, action) => {
            state.count -=  1;
        }
    }
})

export const {setIncrement, setDecrement} = counterSlice.actions
export default counterSlice.reducer