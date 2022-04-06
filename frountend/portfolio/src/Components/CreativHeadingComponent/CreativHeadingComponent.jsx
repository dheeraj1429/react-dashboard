import React from "react";

import "./CreativHeadingComponent.css";

function CreativHeadingComponent({ Heading, subHeading }) {
    return (
        <h1 className="Creative_heading">
            {Heading} <span>{subHeading}</span>
        </h1>
    );
}

export default CreativHeadingComponent;
