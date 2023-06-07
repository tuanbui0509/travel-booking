import { createSlice } from "@reduxjs/toolkit";

const selectedTourSlice = createSlice({
    name: "selectedTour",
    initialState: null,
    reducers: {
        setSelectedTour: (state, action) => {
            return action.payload;
        },
        clearSelectedTour: (state) => null,
    },
});

export const { setSelectedTour, clearSelectedTour } = selectedTourSlice.actions;
export default selectedTourSlice.reducer;
