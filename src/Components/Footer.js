import React from "react";
import "../styles/Footer.css";

export default function Footer(props){
    return(
        <footer className="footer">
            <h2 onClick={e=>props.onInfoClick(e)}>info</h2>
        </footer>
    )
}