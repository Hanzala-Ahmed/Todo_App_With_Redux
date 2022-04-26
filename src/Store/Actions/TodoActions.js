import * as actionTypes from "../constant/todo";

export function addTodo(inputData) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_TODO,
      payload: {
        id: new Date().getTime().toString(),
        data: inputData,
      },
    });
  };
}

export function deleteTodo() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_TODO,
    });
  };
}

export function removeAllTodo() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_ALL_TODO,
    });
  };
}
