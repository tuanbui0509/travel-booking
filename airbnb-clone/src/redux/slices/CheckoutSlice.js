import {createSlice} from "@reduxjs/toolkit";
import {addCheckoutToLocal, removeCartTourFromLocal} from "../../utils/localStorageUtils";
import {clearSelectedTour} from "./SelectedTourSlice";
import {removeCart} from "./CartsSlice";

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
                passenger_details: action.payload.passenger_details
            }
            state.push(newCheckout)
        },
        updatePayment: (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        payment_method: action.payload.payment_method
                    }
                }
                return item;
            })
        },

    },
})
export const {saveInfoPassenger, updatePayment} = checkoutSlice.actions;
export default checkoutSlice.reducer;