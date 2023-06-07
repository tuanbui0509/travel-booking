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
            const { idCard, passengerCount } = action.payload;
            return state.map((item) => {
                if (item.idCard === idCard) {
                    return { ...item, passengerCount: passengerCount };
                }
                return item;
            });
        },

    },
});

export const { addCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
