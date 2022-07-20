import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import AddTodoForm from "./AddTodoForm.js";
import TodoList from "./TodoList.js";
import FilterList from "./FilterList.js";
import AddFilterForm from "./AddFilterForm.js";
import CheckedCount from "./CheckedCount.js";

export default function App() {
  const [filterList, setFilterList] = useState([
    { filterName: "all", filterId: uuid() },
    { filterName: "work", filterId: uuid() },
    { filterName: "home", filterId: uuid() },
  ]); // список филтров
  const [currentFilter, setCurrentFilter] = useState("all"); // выбранный фильтр

  const [addFilterInput, setAddFilterInput] = useState(false);
  const [filterInputValue, setFilterInputValue] = useState("");

  const [todoList, setTodoList] = useState([
    { todoName: "sleep", todoFilter: "home", todoId: uuid() },
    { todoName: "go to work", todoFilter: "work", todoId: uuid() },
  ]); // общий список
  const [todoValue, setTodoValue] = useState(""); // знчение в инпуте туду
  const [filteredTodo, setFilteredTodo] = useState([]); // отфильтрованный список
  const [checkedTodoList, setCheckedTodoList] = useState(0); //счётчик завершённых

  useEffect(() => {
    setFilteredTodo(
      todoList.filter((filter) => filter.todoFilter === currentFilter)
    );
  }, [todoList, currentFilter]);

  function handleFilterClick(e) {
    setCurrentFilter(e.target.classList.value);
  }

  function handleTodoAdd(e) {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { todoName: todoValue, todoFilter: currentFilter, todoId: uuid() },
    ]);
    setTodoValue("");
  }

  function handleDeleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.todoId !== id));
  }

  function handleCheckTodo(id) {
    setCheckedTodoList((prev) => prev + 1);
    setTodoList(todoList.filter((todo) => todo.todoId !== id));
  }

  function handleShowFilterInput(e) {
    e.preventDefault();
    setAddFilterInput(true);
  }
  function handleCloseFilterInput(e) {
    e.preventDefault();
    setAddFilterInput(false);
  }
  function handleSubmitFilterInput(e) {
    e.preventDefault();
    setFilterList([
      ...filterList,
      { filterName: filterInputValue, filterId: uuid() },
    ]);
    setFilterInputValue("");
    setAddFilterInput(false);
  }

  function handleTodoValueChange(e) {
    e.preventDefault();
    setTodoValue(e.target.value);
  }
  function handleFilterInputValueChange(e) {
    e.preventDefault();
    setFilterInputValue(e.target.value);
  }

  return (
    <>
      <FilterList filterList={filterList} onFilterClick={handleFilterClick} />
      <AddFilterForm
        addFilterInput={addFilterInput}
        filterInputValue={filterInputValue}
        onFilterInputValueChange={handleFilterInputValueChange}
        onShowFilterInput={handleShowFilterInput}
        onSubmitFilterInput={handleSubmitFilterInput}
        onCloseFilterInput={handleCloseFilterInput}
      />

      <CheckedCount checkedTodoList={checkedTodoList} />

      <TodoList
        currentFilter={currentFilter}
        filteredTodo={filteredTodo}
        todoList={todoList}
        onCheckTodo={handleCheckTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <AddTodoForm
        todoValue={todoValue}
        currentFilter={currentFilter}
        onTodoAdd={handleTodoAdd}
        onTodoValueChange={handleTodoValueChange}
      />
    </>
  );
}
