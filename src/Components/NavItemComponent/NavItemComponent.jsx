import React from "react";

import * as NavbarItem from "./NavItemComponent.style";

function NavItemComponent({ innerText, TargetId }) {
    return <NavbarItem.NavbarLi Value={TargetId}>{innerText}</NavbarItem.NavbarLi>;
}

export default NavItemComponent;
