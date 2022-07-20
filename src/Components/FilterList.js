import React from "react";
import Filter from "./Filter";


export default function FilterList(props) {
  return (
    <>
      <ul className="filterList__ul">
      {props.filterList.map((filter) => (
        <Filter key={filter.filterId} filter={filter} onFilterClick={props.onFilterClick} onFilterDelete={props.onFilterDelete}/>
      ))}
      </ul>
      
    </>
  );
}
