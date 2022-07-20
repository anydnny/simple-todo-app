import React from "react";
import Filter from "./Filter";

export default function FilterList(props) {
  return (
    <>
      {props.filterList.map((filter) => (
        <Filter key={filter.filterId} filter={filter} onFilterClick={props.onFilterClick} />
      ))}
    </>
  );
}
