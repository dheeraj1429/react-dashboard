import React from "react";

import "./IconComponent.css";

function IconComponent({ icon }) {
    return (
        <div className="icons_div">
            <i class={icon}></i>
        </div>
    );
}

export default IconComponent;
