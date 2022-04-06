import React from "react";

import "./IconWithContentComponent.css";

function IconWithContentComponent({ icon, conetnt }) {
    return (
        <div className="col-sm-12 col-sm-12 col-md-3 text-center icon_content_div px-5">
            <i class={icon}></i>
            <h3>{conetnt}</h3>
        </div>
    );
}

export default IconWithContentComponent;
