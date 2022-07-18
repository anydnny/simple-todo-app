import React from "react";
import Todo from "./Todo.js";

export default function TodoList(props) {
  return (
    <>
      <ul>
        {props.currentFilter !== "all"
          ? props.filteredTodo.map((todo) => (
              <Todo
                key={todo.todoId}
                todo={todo}
                onDeleteTodo={props.onDeleteTodo}
                onCheckTodo={props.onCheckTodo}
              />
            ))
          : props.todoList.map((todo) => (
              <Todo
                key={todo.todoId}
                todo={todo}
                onDeleteTodo={props.onDeleteTodo}
                onCheckTodo={props.onCheckTodo}
              />
            ))}
      </ul>
    </>
  );
}
