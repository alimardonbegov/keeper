import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfNotes: [],
};

export const keeperSlice = createSlice({
    name: "keeper",
    initialState,
    reducers: {
        createNote: (state, action) => {
            state.listOfNotes.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.listOfNotes = state.listOfNotes.filter((item, index) => index !== action.payload);
        },
    },
});

export const { createNote, deleteNote } = keeperSlice.actions;
