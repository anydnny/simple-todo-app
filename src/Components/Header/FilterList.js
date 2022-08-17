import React from "react";
import Filter from "./Filter";
import "../../styles/FilterList.css"

export default function FilterList(props) {
  const filterList = document.querySelector(".filterList__ul");
  const windowWidth = window.innerWidth;
  const eightyProcent = (windowWidth * 60)/100;

  if(filterList?.clientWidth >= eightyProcent){
    filterList.style.display = "flex";
    filterList.style.flexWrap = "no-wrap";
    filterList.style.alignItems = "center";
    filterList.style.overflow = "scroll";
  }
  if(filterList?.clientWidth <= eightyProcent){
    filterList.style.display = "inline";
    filterList.style.overflow = "unset";
  }
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
