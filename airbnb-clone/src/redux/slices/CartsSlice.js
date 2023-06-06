import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'carts',
    initialState: [
        { id: 1, name: 'Learn Yoga', completed: false, prioprity: 'Medium'}
    ],
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload)
        }
    }
    
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer