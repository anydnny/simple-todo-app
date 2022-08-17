import React from "react";
import "../../styles/CheckedCount.css";

export default function CheckedCount(props) {
  return (
    <div className="checkedCount__block">
      <span className="checkedCount__span">
        Checked: {<span>{props.checkedTodoList ?props.checkedTodoList: 0 }</span>}
    </span>
    </div>
    
  );
}
