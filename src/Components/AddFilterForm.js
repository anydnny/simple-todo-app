import React from "react";

export default function AddFilterForm(props) {
  return (
    <form className="addFilterForm">
      {props.addFilterInput && (
        <input
          type="text"
          className="FilterInput"
          value={props.filterInputValue}
          onChange={props.onFilterInputValueChange}
        />
      )}
      <button
        type={!props.addFilterInput ? "button" : "submit"}
        className="FilterAddBtn"
        onClick={
          !props.addFilterInput
            ? props.onShowFilterInput
            : props.onSubmitFilterInput
        }
      >
        {props.addFilterInput ? "add new filter" : "+"}
      </button>
      {props.addFilterInput && (
        <button onClick={props.onCloseFilterInput} className="FilterCloseBtn">
          x
        </button>
      )}
    </form>
  );
}
