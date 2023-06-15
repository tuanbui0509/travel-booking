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
        }
    }
})

// export hàm ra ngoài
export const { keyFilterChange } = filterSlice.actions
export default filterSlice.reducer;