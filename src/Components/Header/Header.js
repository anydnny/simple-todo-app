import React from "react";

export default function Header(props){
    const {children} = props;
    return (
        <header className="header">{children}</header>
    )
}