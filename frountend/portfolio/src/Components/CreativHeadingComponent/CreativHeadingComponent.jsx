import React from "react";

import "./CreativHeadingComponent.css";

function CreativHeadingComponent({ Heading, subHeading, cl }) {
    return (
        <h1 className={cl ? `${cl} Creative_heading` : "Creative_heading"}>
            {Heading} <span>{subHeading}</span>
        </h1>
    );
}

export default CreativHeadingComponent;
