import React from "react";
import "../styles/AddTodoForm.css";

export default function AddTodoForm(props){
    const {addFilterInput} = props;
    if(!props.addFilterInput&&props.currentFilter === "all"){
        return null
    }
    return (
        <form>
                <input  type="text" value={!addFilterInput? props.todoValue: props.filterInputValue} onChange={!addFilterInput?props.onTodoValueChange:props.onFilterInputValueChange} placeholder={!addFilterInput?`new todo`: 'new list'}/>
                <button className="addBtn" disabled={(addFilterInput && props.longFilterName)||(addFilterInput && !props.filterInputValue)||(!addFilterInput&&!props.todoValue)} onClick={!addFilterInput? props.onTodoAdd: props.onSubmitFilterInput}>add</button>
         </form>
    )
}