import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./Store/Actions/TodoActions";
import { FcFullTrash } from "react-icons/fc";

const App = () => {
  const [inputData, setInputData] = useState("");
  const myData = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  // const todo = (e) => {
  //   dispatch(addTodo(inputData));
  //   e.preventDefault();
  //   console.log(inputData);
  //   setInputData("");
  // };
  // console.log(myData);
  return (
    <>
      <div className="main">
        <div className="todoMainBox">
          <h3>Add your list here...</h3>
          <div className="todo">
            <div className="addTodo">
            <form
              action=""
              onSubmit={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              <span>✍️</span>
              <input
                type="text"
                placeholder="Add your Todo..."
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}
              />
              <button
                onClick={(e) =>
                  dispatch(
                    addTodo(inputData),
                    setInputData(""),
                    e.preventDefault()
                  )
                }
              >
                +
              </button>
            </form>
            </div>

            <div className="todoList">
              <span>Helloasfddsddaasfasdssdfdsfsdfssdfdsfsdfdsfdsdfsdfasddfewqwedfsadfasdfeew</span>
              <FcFullTrash className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
