import React from "react";
import { combineReducers } from "redux";

//-------- todoList ------------
function todoList(state = [1], action) {

    switch (action.type) {

        case "A_ADD_TODO": {

            state[0] += 1;
            return [...state]

        }; break;

        default: return state
    }
}

let reducers = combineReducers({
    todoList
})


export default reducers;
