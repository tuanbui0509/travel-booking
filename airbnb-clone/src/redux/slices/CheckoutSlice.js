import {createSlice} from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
    name: "checkout",
    initialState: [],
    reducers: {
        saveInfoPassenger: (state, action) => {
            const newCheckout = {
                user_id: action.payload.user_id,
                tour: action.payload.tour,
                total_price: action.payload.total_price,
                payment_method: action.payload.payment_method,
                status: pending,
                passenger_details: [
                    action.payload.passenger_details.map((item) => {
                        return ({
                            full_name: item.full_name,
                            phone:item.phone ,
                            email:item.email,
                            address:item.address,
                            city:item.city,
                            nationality:item.nationality,
                            passport_number:item.passport_number
                        })
                    })
                ]
            }
            state.push(newCheckout)
        }
    },
})