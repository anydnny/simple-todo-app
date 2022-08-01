import React from "react";
import "../styles/AddFilterButton.css"
export default function AddFilterButton(props) {
  const {addFilterInput,onShowFilterInput,onCloseFilterInput} = props;
  return (
    <button
      onClick={!addFilterInput ? onShowFilterInput : onCloseFilterInput}
      className={
        "switchButton" +
        " " +
        (addFilterInput ? "addFilterInputButton" : "closeFilterInputButton")
      }
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="1.5" />
      </svg>
    </button>
  );
}
