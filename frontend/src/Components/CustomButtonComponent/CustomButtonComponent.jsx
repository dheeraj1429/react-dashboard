import React from "react";
import * as CustomButton from "./CustomButtonComponent-style";

function CustomButtonComponent({ cl, target }) {
    return (
        <>
            <a href={`#${target ? target : null}`}>
                <CustomButton.Button className={cl ? `${cl} btn_custom` : "btn_custom"}>Learn More</CustomButton.Button>
                ;
            </a>
        </>
    );
}

export default CustomButtonComponent;
