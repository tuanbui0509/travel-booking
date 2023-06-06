import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/FiltersSlice";
import todoListReducer from "./slices/TodoListSlice";
import cartReducer from "./slices/CartsSlice";

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        todoList: todoListReducer,
        carts: cartReducer
    }
})

export default store;