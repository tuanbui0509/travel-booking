import { createSelector } from "@reduxjs/toolkit";

//export những giá trị trong redux mà chúng ta muốn lấy ra, khi muốn lấy ra chúng ta gọi đến lớp này

export const todoListSelector = (state) => state.todoList

export const searchTextSelector = (state) => state.filters.search

// có thể dùng lại 2 thằng trên để tạo ra cái mới
export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.includes(searchText);
        }
        )
    }
)

export const cartsSelector = (state) => state.carts