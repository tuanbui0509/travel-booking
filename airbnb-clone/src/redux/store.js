import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/FiltersSlice";
import todoListReducer from "./slices/TodoListSlice";
import cartReducer from "./slices/CartsSlice";
import selectedTourReducer from "./slices/SelectedTourSlice";
import checkoutReducer from "./slices/CheckoutSlice"

const store = configureStore({
    reducer: {
        selectedTour: selectedTourReducer,
        filters: filtersReducer,
        todoList: todoListReducer,
        carts: cartReducer,
        checkout: checkoutReducer
    }
})

export default store;