import React from "react";
import "../styles/Filter.css";

export default function Filter(props) {
  return (
    <>
      <li className="filter__li" id={props.filter.filterName} onClick={props.onFilterClick}>
        <span className="filter__span" >{props.filter.filterName}</span>
        {props.filter.filterName !== "all" && <button className="filter__closeBtn" onClick={()=>props.onFilterDelete(props.filter.filterName)} >
          <span>x</span>
          </button>}
      </li>
    
    </>

  );
}
