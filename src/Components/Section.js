import React from "react";

export default function Section(props){
    const {className, children} = props;
    return (
        <section className={className}>
            {children}
        </section>
    )
    
}