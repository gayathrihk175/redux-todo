/*
(*) This is responsible for tracking your initial state of the store
(*) All of the reducers are collected here
*/

import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1,text:"Hello"}],
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer; //this needs to be wired up with the store.