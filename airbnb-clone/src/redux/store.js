import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/FiltersSlice";
import todoListReducer from "./slices/TodoListSlice";
import cartReducer from "./slices/CartsSlice";
import selectedTourReducer from "./slices/SelectedTourSlice";
import authReducer from "./slices/AuthSlice"

const store = configureStore({
    reducer: {
        selectedTour: selectedTourReducer,
        filters: filtersReducer,
        todoList: todoListReducer,
        carts: cartReducer,
        auths: authReducer
    }
})

export default store;