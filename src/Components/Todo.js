import React from "react";
import "../styles/Todo.css";

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
          𐄂
        </button>
      </li>
    </>
  );
}
