import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            const cartItem = state.find((item) => item.idCard === action.payload.idCard);
            if (!cartItem) {
                state.push(action.payload);
            }
        },
        removeCart: (state, action) => {
            const itemId = action.payload;
            return state.filter((item) => item.idCard !== itemId);
        },
        updateCart: (state, action) => {
            const { idCard, quantity } = action.payload;
            const cartItem = state.find((item) => item.idCard === idCard);
            if (cartItem) {
                cartItem.passengerCount = quantity;
            }
        },
    },
});

export const { addCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
