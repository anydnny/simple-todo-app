import React from "react";

export default function Todo(props) {
  return (
    <>
      <li>
        <button onClick={() => props.onCheckTodo(props.todo.todoId)}>
          check
        </button>
        <p>
          {props.todo.todoName} {props.todo.todoFilter}
        </p>
        <button onClick={() => props.onDeleteTodo(props.todo.todoId)}>
          delete
        </button>
      </li>
    </>
  );
}
