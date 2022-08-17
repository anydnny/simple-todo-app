import React from "react";
import "../../styles/Todo.css";

export default function Todo(props) {
  return (
    <>
      <li className="todo__li">
        <button className="todo__checkBtn" onClick={() => props.onCheckTodo(props.todo.todoId)}>
        </button>
        <p>
          {props.todo.todoName}
        </p>
        <button className="todo__deleteBtn" onClick={() => props.onDeleteTodo(props.todo.todoId)}>
        <svg
        width="7"
        height="7"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="3" />
      </svg>
        </button>
      </li>
    </>
  );
}
