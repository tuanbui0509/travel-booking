import { createSlice } from "@reduxjs/toolkit"

const todoSlice =  createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Yoga', completed: false, prioprity: 'Medium'},
        { id: 2, name: 'Learn Redux', completed: false, prioprity: 'High'},
        { id: 3, name: 'Learn JavaScript', completed: false, prioprity: 'Low'},
    ],
    reducers: {
        //state là initialState
        //action.payload là giá trị mà chúng ta truyền vào từ dispatch
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})

// export hàm ra ngoài
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer