import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        key: '',
        starting: '',
        destination: '',
        date:""
    },
    reducers: {
        keyFilterChange: (state, action) => {
            state.key = action.payload
        },
        searchChange: (state, action) => {
            state.starting = action.payload.starting
            state.destination = action.payload.destination
            state.date = action.payload.date
        }
    }
})

// export hàm ra ngoài
export const { keyFilterChange, searchChange } = filterSlice.actions
export default filterSlice.reducer;