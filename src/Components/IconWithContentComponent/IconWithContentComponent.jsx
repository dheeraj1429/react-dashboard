import React from "react";
import * as IconsWithContent from "./IconsWithContentComponent.style";

function IconWithContentComponent({ icon, conetnt }) {
    return (
        <IconsWithContent.div className="col-sm-12 col-sm-12 col-md-3 text-center icon_content_div px-5">
            <IconsWithContent.i className={icon}></IconsWithContent.i>
            <IconsWithContent.h3>{conetnt}</IconsWithContent.h3>
        </IconsWithContent.div>
    );
}

export default IconWithContentComponent;
