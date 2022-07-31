import React from "react";
import "../styles/AddFilterButton.css"
export default function AddFilterButton(props) {
  const {addFilterInput,onShowFilterInput,onCloseFilterInput} = props;
  return (
    
        <button  onClick={!addFilterInput? onShowFilterInput: onCloseFilterInput}  className={"switchButton"+" "+(addFilterInput? "addFilterInputButton": "closeFilterInputButton")}>
          {!props.addFilterInput? "+": "𐄂"}
        </button>
  )
}
