import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/FiltersSlice";
import cartReducer from "./slices/CartsSlice";
import selectedTourReducer from "./slices/SelectedTourSlice";
import tourReducer from "./slices/TourSlice"

const store = configureStore({
    reducer: {
        selectedTour: selectedTourReducer,
        filters: filtersReducer,
        carts: cartReducer,
        tours: tourReducer
    }
})

export default store;