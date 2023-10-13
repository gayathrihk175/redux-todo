import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"  //the name doesnt need to be same as the one in todoSlice.js

const store = configureStore({
    reducer : todoReducer,   //the store needs to be aware of all the reducers , so pass this here.Incase of large scale apps ,pass as an object.

})

export default store;