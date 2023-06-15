import {createSlice} from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: [],
    reducers: {
        saveInfoPassenger: (state, action) => {
            const newCheckout = {
                id: action.payload.id,
                user_id: action.payload.user_id,
                tour: action.payload.tour,
                total_price: action.payload.total_price,
                payment_method: action.payload.payment_method,
                status: "pending",
                passenger_details:action.payload.passenger_details
            }
            state.push(newCheckout)
        }
    },
})
export const { saveInfoPassenger } = checkoutSlice.actions;
export default checkoutSlice.reducer;