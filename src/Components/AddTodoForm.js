import React from "react";

export default function AddTodoForm(props){
    const {addFilterInput} = props;
    return (
        <form>
                <input  value={!addFilterInput? props.todoValue: props.filterInputValue} onChange={!addFilterInput?props.onTodoValueChange:props.onFilterInputValueChange} placeholder={!addFilterInput?`add to ${props.currentFilter}`: 'add new filter'}/>
                <button disabled={(addFilterInput&&!props.filterInputValue)||(!addFilterInput&&!props.todoValue)} onClick={!addFilterInput? props.onTodoAdd: props.onSubmitFilterInput}>{!addFilterInput? "add todo": "add filter"}</button>
         </form>
    )
}