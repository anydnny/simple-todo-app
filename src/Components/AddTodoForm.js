import React from "react";

export default function AddTodoForm(props){
    return (
        <form>
                <input  value={props.todoValue} onChange={props.onTodoValueChange} placeholder={`add to ${props.currentFilter}`}/>
                <button onClick={props.onTodoAdd}>add todo</button>
         </form>
    )
}