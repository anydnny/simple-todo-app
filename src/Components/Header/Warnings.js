import React from "react";
import "../../styles/Warnings.css";

export default function Warnings({doublicateFilterWarning,emptyFilterWarning,emptyTodoWarning,longFilterName}){

    return(
        <div className="warnings">
            <p>{doublicateFilterWarning ? "filter almost here" : null}</p>
            <p>{!emptyFilterWarning ? "write filter text" : null}</p>
            <p>{!emptyTodoWarning ? "Write todo text" : null}</p>
            <p>{longFilterName? "filter name more then 20 sings": null}</p>
        </div>
    )
}