import * as actionTypes from "../constant/todo"

const INITIAL_STATE = {
    list: {}
}

export const todoList= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO: 
            const {id, data} = action.payload
            return {
                ...state,
                list: [
                    // ...state.list,
                    {
                        id:id,
                        data: data
                    }
                ]
            }
        
            
    
        default: return state
    }
}