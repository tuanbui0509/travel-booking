import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/FiltersSlice";
import cartReducer from "./slices/CartsSlice";
import selectedTourReducer from "./slices/SelectedTourSlice";
import tourReducer from "./slices/TourSlice"
import arrangementReducer from "./slices/ArrangementSlice";

const store = configureStore({
    reducer: {
        selectedTour: selectedTourReducer,
        filters: filtersReducer,
        carts: cartReducer,
        tours: tourReducer,
        arrangement: arrangementReducer
    }
})

export default store;