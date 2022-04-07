import React from "react";
import * as CustomButton from "./CustomButtonComponent-style";

function CustomButtonComponent({ cl }) {
    return <CustomButton.Button className={cl ? `${cl} btn_custom` : "btn_custom"}>Learn More</CustomButton.Button>;
}

export default CustomButtonComponent;
