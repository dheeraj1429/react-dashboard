import React from "react";
import * as Icons from "./IconsComponent.style";

function IconComponent({ icon }) {
    return (
        <Icons.div className="icons_div">
            <Icons.i className={icon}></Icons.i>
        </Icons.div>
    );
}

export default IconComponent;
