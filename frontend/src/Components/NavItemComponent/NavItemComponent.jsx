import React from "react";

import * as NavbarItem from "./NavItemComponent.style";

function NavItemComponent({ innerText }) {
    return <NavbarItem.NavbarLi>{innerText}</NavbarItem.NavbarLi>;
}

export default NavItemComponent;
