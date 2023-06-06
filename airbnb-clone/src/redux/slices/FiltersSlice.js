import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        prioprity: []
    },
    reducers: {
        //state là initialState
        //action.payload là giá trị mà chúng ta truyền vào từ dispatch
        searchFilterChange: (state, action) => {
            state.search = action.payload
        }
    }
})

// export hàm ra ngoài
export const { searchFilterChange } = filterSlice.actions
export default filterSlice.reducer;