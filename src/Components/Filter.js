import React from "react";

export default function Filter(props) {
  return (
    <li
      className={props.filter.filterName}
      onClick={props.onFilterClick}
    >
      {props.filter.filterName}
    </li>
  );
}
