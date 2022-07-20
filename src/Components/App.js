import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import AddTodoForm from "./AddTodoForm.js";
import TodoList from "./TodoList.js";
import FilterList from "./FilterList.js";
import AddFilterButton from "./AddFilterButton.js";
import CheckedCount from "./CheckedCount.js";

import "../styles/index.css";

export default function App() {
  const [filterList, setFilterList] = useState([
    { filterName: "all", filterId: uuid() },
    { filterName: "work", filterId: uuid() },
    { filterName: "home", filterId: uuid() },
  ]); // список филтров
  const [currentFilter, setCurrentFilter] = useState("all"); // выбранный фильтр

  const [addFilterInput, setAddFilterInput] = useState(false);
  const [filterInputValue, setFilterInputValue] = useState("");
  const [doublicateFilter, setDoublicateFilter] = useState(false);
  const [doublicateFilterWarning, setDoublicateFilterWarning] = useState(false);
  const [emptyFilter, setEmptyFilter] = useState(false);
  const [emptyFilterWarning, setEmptyFilterWarning] = useState(true);

  const [todoList, setTodoList] = useState([
    { todoName: "sleep", todoFilter: "home", todoId: uuid() },
    { todoName: "go to work", todoFilter: "work", todoId: uuid() },
  ]); // общий список

  const [todoValue, setTodoValue] = useState(""); // знчение в инпуте туду
  const [filteredTodo, setFilteredTodo] = useState([]); // отфильтрованный список
  const [checkedTodoList, setCheckedTodoList] = useState(0); //счётчик завершённых
  const [emptyTodo, setEmptyTodo] = useState(false);
  const [emptyTodoWarning, setEmptyTodoWarning] = useState(true);


  useEffect(() => {
    setFilteredTodo(
      todoList.filter((filter) => filter.todoFilter === currentFilter)
    )
  }, [todoList, currentFilter]);

  useEffect(()=>{
      const list = document.querySelectorAll(".filter__li").forEach(item =>item.classList.remove("filter_active"));
      const newCurrentFilter = document.getElementById(`${currentFilter}`).classList.add("filter_active");


    }, [currentFilter])
  
    useEffect(()=>{
    setCurrentFilter(filterList[filterList.length - 1].filterName)
  }, [filterList]);

  useEffect(()=>{
    setDoublicateFilter(filterList?.map(item => item.filterName).includes(filterInputValue));
  }, [filterInputValue]); 

  useEffect(() =>{
    setEmptyTodo(todoValue.trim()? true: false); 
    setEmptyFilter(filterInputValue.trim() ?true:false);
  }, [todoValue, filterInputValue])

  function handleFilterClick(e) {
    setCurrentFilter(e.target.closest("li").id);
    
  }

  function handleTodoAdd(e) {
    e.preventDefault();
    setEmptyTodoWarning(emptyTodo)
    setTodoList(!emptyTodo? [...todoList]:[
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
    setFilterInputValue("");
    setAddFilterInput(false);
  }
  function handleSubmitFilterInput(e) {
    e.preventDefault();
    setDoublicateFilterWarning(doublicateFilter);
    setEmptyFilterWarning(emptyFilter);
    
    setFilterList(!emptyFilter || doublicateFilter?[...filterList]:[
      ...filterList,
      { filterName: filterInputValue, filterId: uuid() },
    ]);
    setFilterInputValue("");
    setAddFilterInput(false);
  }
  function handleFilterDelete(deleteFilterName){
    setTodoList(todoList.filter(filter => filter.todoFilter !== deleteFilterName));
    setFilterList(filterList.filter(filter => filter.filterName !== deleteFilterName))
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
      <div className="filter__section">
        <FilterList
          filterList={filterList}
          onFilterClick={handleFilterClick}
          onFilterDelete={handleFilterDelete}
        />
        <AddFilterButton
          addFilterInput={addFilterInput}
          onShowFilterInput={handleShowFilterInput}
          onCloseFilterInput={handleCloseFilterInput}
        />
      </div>

      <CheckedCount checkedTodoList={checkedTodoList} />

      <TodoList
        currentFilter={currentFilter}
        filteredTodo={filteredTodo}
        todoList={todoList}
        onCheckTodo={handleCheckTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <p>
        {doublicateFilterWarning ? "filter almost here" : null}{" "}
        {!emptyFilterWarning ? "write filter text" : null}
      </p>
      <p>{!emptyTodoWarning ? "Write todo text" : null}</p>
      <AddTodoForm
        todoValue={todoValue}
        currentFilter={currentFilter}
        onTodoAdd={handleTodoAdd}
        onTodoValueChange={handleTodoValueChange}
        addFilterInput={addFilterInput}
        filterInputValue={filterInputValue}
        onFilterInputValueChange={handleFilterInputValueChange}
        onSubmitFilterInput={handleSubmitFilterInput}
      />
    </>
  );
}
