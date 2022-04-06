import React from "react";
import "./CustomButtonComponent.css";

function CustomButtonComponent({ cl }) {
    return <button className={cl ? `${cl} btn_custom` : "btn_custom"}>Learn More</button>;
}

export default CustomButtonComponent;
