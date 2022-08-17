import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import AddTodoForm from "./Header/AddTodoForm.js";
import TodoList from "./Main/TodoList.js";
import FilterList from "./Header/FilterList.js";
import AddFilterButton from "./Header/AddFilterButton.js";
import CheckedCount from "./Header/CheckedCount.js";
import Warnings from "./Header/Warnings.js";
import Footer from "./Footer.js";
import Header from "./Header/Header.js";
import Section from "./Section.js";
import Main from "./Main/Main.js";

import "normalize.css";
import "../styles/index.css";
import Logo from "./Header/Logo.js";

export default function App() {
  const [filterList, setFilterList] = useState([
    { filterName: "all", filterId: uuid() },
    { filterName: "work", filterId: uuid() },
    { filterName: "home", filterId: uuid() },
  ]); // список филтров
  const [currentFilter, setCurrentFilter] = useState("all"); // выбранный фильтр
  const [todoList, setTodoList] = useState([
    { todoName: "sleep", todoFilter: "home", todoId: uuid() },
    { todoName: "go to work", todoFilter: "work", todoId: uuid() },
  ]); // общий список

  const [addFilterInput, setAddFilterInput] = useState(false);
  const [filterInputValue, setFilterInputValue] = useState("");
  const [doublicateFilter, setDoublicateFilter] = useState(false);
  const [doublicateFilterWarning, setDoublicateFilterWarning] = useState(false);
  const [emptyFilter, setEmptyFilter] = useState(false);
  const [emptyFilterWarning, setEmptyFilterWarning] = useState(true);
  const [longFilterName, setLongFilterName] = useState(false);
  
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
      document.querySelectorAll(".filter__li").forEach(item =>item.classList.remove("filter_active"));
      document.getElementById(`${currentFilter}`).classList.add("filter_active");
    }, [currentFilter])
  
    useEffect(()=>{
    setCurrentFilter(filterList[filterList.length - 1].filterName)
  }, [filterList]);

  useEffect(()=>{
    setDoublicateFilter(filterList?.map(item => item.filterName).includes(filterInputValue.trim()));
    setEmptyFilter(filterInputValue.trim().length ? true:false);
    setLongFilterName(filterInputValue.trim().length >= 20)
  }, [filterInputValue]); 

  useEffect(() =>{
    setEmptyTodo(todoValue.trim().length ? true: false); 
  }, [todoValue])


  useEffect(()=>{
    if(!emptyTodoWarning || !emptyFilterWarning || doublicateFilterWarning){
      const timerId = setTimeout(()=>{
            setEmptyTodoWarning(true);
            setEmptyFilterWarning(true);
            setDoublicateFilterWarning(false)
          }, 2000)
          return () => clearTimeout(timerId)
          }
    }, [emptyTodoWarning, emptyFilterWarning, doublicateFilterWarning])

  function handleFilterClick(e) {
    setCurrentFilter(e.target.closest("li").id);
    
  }
  function handleTodoAdd(e) {
    e.preventDefault();
    setEmptyTodoWarning(emptyTodo)
    setTodoList(!emptyTodo? [...todoList]:[
      { todoName: todoValue, todoFilter: currentFilter, todoId: uuid() }, ...todoList
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
    
    setFilterList(!emptyFilter || doublicateFilter || longFilterName ?[...filterList]:[
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
      <Header>
        <Logo />
        <Section className="filter__section">
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
        </Section>
        <CheckedCount checkedTodoList={checkedTodoList} />
        <Warnings
          doublicateFilterWarning={doublicateFilterWarning}
          emptyFilterWarning={emptyFilterWarning}
          emptyTodoWarning={emptyTodoWarning}
          longFilterName={longFilterName}
        />
        <AddTodoForm
          todoValue={todoValue}
          currentFilter={currentFilter}
          onTodoAdd={handleTodoAdd}
          onTodoValueChange={handleTodoValueChange}
          addFilterInput={addFilterInput}
          filterInputValue={filterInputValue}
          onFilterInputValueChange={handleFilterInputValueChange}
          onSubmitFilterInput={handleSubmitFilterInput}
          longFilterName={longFilterName}
        />
      </Header>
      <Main>
        <TodoList
          currentFilter={currentFilter}
          filteredTodo={filteredTodo}
          todoList={todoList}
          onCheckTodo={handleCheckTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </Main>
      <Footer />
    </>
  );
}
