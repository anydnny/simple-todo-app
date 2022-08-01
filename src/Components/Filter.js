import React from "react";
import "../styles/Filter.css";

export default function Filter(props) {
  return (
    <>
      <li className="filter__li" id={props.filter.filterName} onClick={props.onFilterClick}>
        <span className="filter__span" >{props.filter.filterName}</span>
        {props.filter.filterName !== "all" && <button className="filter__closeBtn" onClick={()=>props.onFilterDelete(props.filter.filterName)} >
        <svg
        width="7"
        height="7"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="3" />
      </svg>
          </button>}
      </li>
    
    </>

  );
}
