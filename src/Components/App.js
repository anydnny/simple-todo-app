import React, {useState, useEffect} from "react";
import uuid from "react-uuid";

import TodoList from "./TodoList.js";

export default function App(){

    const [filterList, setFilterList] = useState([{filterName: "all", filterId: uuid()}, {filterName: "work", filterId: uuid()}, {filterName: "home", filterId: uuid()}]) // список филтров
    const [currentFilter, setCurrentFilter] = useState("all"); // выбранный фильтр
    
    const [addFilterInput, setAddFilterInput] = useState(false);
    const [filterInputValue, setFilterInputValue] = useState("");

    const [todoList, setTodoList] = useState([{todoName: "sleep", todoFilter: "home", todoId: uuid()}, {todoName: "go to work", todoFilter: "work", todoId: uuid()}]); // общий список
    const [todoValue, setTodoValue] = useState(""); // знчение в инпуте туду
    const [filteredTodo, setFilteredTodo] = useState([]); // отфильтрованный список
    const [checkedTodoList, setCheckedTodoList] = useState(0) //счётчик завершённых


    useEffect(()=>{
        setFilteredTodo(todoList.filter((filter => filter.todoFilter === currentFilter)))
    }, [todoList, currentFilter])

    function handleFilterClick(e){
        setCurrentFilter(e.target.classList.value)
    }
    
    function handleTodoAdd(e){
        e.preventDefault();
        setTodoList([...todoList, {todoName: todoValue, todoFilter: currentFilter, todoId: uuid()}]);
        setTodoValue("")
    }

   function handleDeleteTodo(id){
    setTodoList(todoList.filter(todo => todo.todoId !== id))
   }

   function handleCheckTodo(id){
    setCheckedTodoList(prev => prev + 1)
    setTodoList(todoList.filter(todo => todo.todoId !== id));
   }

   function handleShowFilterInput(e){
    e.preventDefault();
    setAddFilterInput(true)
   }
   function handleCloseFilterInput(e){
    e.preventDefault();
    setAddFilterInput(false)
   }
   function handleSubmitFilterInput(e){
    e.preventDefault();
    setFilterList([...filterList, {filterName: filterInputValue, filterId: uuid()}]);
    setFilterInputValue("");
    setAddFilterInput(false)
   }


    return (
        <>
        <div className = "filterBlock">
            <ul>
                {filterList.map(filter => <li key={filter.filterId} className={filter.filterName} onClick={handleFilterClick}>{filter.filterName}</li>)}
                <form className="addFilterForm">
                    {addFilterInput && <input type="text" className="FilterInput" value={filterInputValue} onChange={e=> setFilterInputValue(e.target.value)}/>}
                    <button type={!addFilterInput? "button": "submit"} className="FilterAddBtn" onClick={!addFilterInput? handleShowFilterInput: handleSubmitFilterInput}>{addFilterInput? "add new filter": "+"}</button>
                    {addFilterInput && <button onClick={handleCloseFilterInput} className="FilterCloseBtn">x</button>}
                </form>
            </ul>
        </div>
        <div>
            <span>{checkedTodoList? `Checked: ${checkedTodoList}` : "Nothing checked"}</span>
        </div>
        <div>
            <TodoList currentFilter={currentFilter} filteredTodo={filteredTodo} todoList={todoList} onCheckTodo={handleCheckTodo} onDeleteTodo={handleDeleteTodo} />
            <form>
                <input  value={todoValue} onChange={e=> setTodoValue(e.target.value)} placeholder={`add to ${currentFilter}`}/>
                <button onClick={handleTodoAdd}>add todo</button>
            </form>
        </div>
        </>
    )
}