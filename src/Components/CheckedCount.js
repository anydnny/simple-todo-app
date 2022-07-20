import React from "react";

export default function CheckedCount(props) {
  return (
    <span>
      {props.checkedTodoList
        ? `Checked: ${props.checkedTodoList}`
        : "Nothing checked"}
    </span>
  );
}
