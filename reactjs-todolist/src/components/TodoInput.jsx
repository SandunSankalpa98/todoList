/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue} = props;
//   const [todoValue, setTodoValue] = useState("");
  return (
    <div>
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          type="text"
          placeholder="Enter Todo.."
        />

        <button
          onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue('')
          }}
        >
          Add
        </button>
      </header>
    </div>
  );
};

export default TodoInput;
