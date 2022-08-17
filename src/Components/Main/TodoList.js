import React from "react";
import Todo from "./Todo.js";
import "../../styles/TodoList.css";

export default function TodoList(props) {
  const listCount = props.todoList.map(item => item.todoName).length;
  return (
    <>
      <section className="todoList__section">
      {(props.currentFilter !== "all"&& props.filteredTodo?.length === 0) || (props.currentFilter === "all" && listCount===0) ? <p className="clearTodo">Nothing</p> : null}
      
      {(props.currentFilter ==="all" && listCount === 0) || (props.currentFilter !== "all"&& props.filteredTodo?.length === 0) ?  null : <div className="todoCount__block">
        {props.currentFilter !== "all" ? <span>{props.filteredTodo?.length !== 0 && props.filteredTodo?.length}</span> : <span>{listCount}</span>}
      </div>}
      
      <ul className="todoList__ul">
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
      </section>
    </>
  );
}
