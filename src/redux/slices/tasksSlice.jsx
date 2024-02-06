import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userTasks : [],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action) => void(state.userTasks = action.payload),
    },
});

export const {setTasks} = tasksSlice.actions;
export default tasksSlice.reducer; 