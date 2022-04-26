import { todoList } from "./todoList";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoList: todoList,
})

export default rootReducer