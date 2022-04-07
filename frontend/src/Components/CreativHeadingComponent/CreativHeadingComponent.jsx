import React from "react";
import * as Creative from "./CreativeHeadingComponent.style";
import "./CreativHeadingComponent.css";

function CreativHeadingComponent({ Heading, subHeading, cl }) {
    return (
        <Creative.h1 className={!cl ? `${cl}` : "heading_two_cl"}>
            {Heading} <Creative.span>{subHeading}</Creative.span>
        </Creative.h1>
    );
}

export default CreativHeadingComponent;
