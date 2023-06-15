import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/FiltersSlice";
import todoListReducer from "./slices/TodoListSlice";
import cartReducer from "./slices/CartsSlice";
import selectedTourReducer from "./slices/SelectedTourSlice";

const store = configureStore({
    reducer: {
        selectedTour: selectedTourReducer,
        filters: filtersReducer,
        todoList: todoListReducer,
        carts: cartReducer
    }
})

export default store;