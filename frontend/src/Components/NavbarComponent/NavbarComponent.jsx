import React, { useState } from "react";
import NavItemComponent from "../NavItemComponent/NavItemComponent";
import * as Navbar from "./NavbarComponent.style";

function NavbarComponent() {
    const [LightNv, setLightNv] = useState(false);

    const scrollFuntion = function () {
        window.addEventListener("scroll", function (e) {
            if (this.scrollY >= 100) {
                setLightNv(true);
            } else {
                setLightNv(false);
            }
        });
    };

    scrollFuntion();

    return (
        <Navbar.NavbarDivComponent
            style={
                LightNv === true
                    ? {
                          backgroundColor: `var(--smLight)`,
                      }
                    : null
            }
        >
            <Navbar.NavDiv className="container-fluid side_padding">
                <Navbar.NavDiv className="row py-4">
                    <Navbar.NavDiv className="col-12 col-sm-12 col-md-2"></Navbar.NavDiv>
                    <Navbar.NavDiv className="col-12 col-sm-12 col-md-8">
                        <Navbar.NavbarUl>
                            <NavItemComponent innerText={"Home"} />
                            <NavItemComponent innerText={"About Us"} />
                            <NavItemComponent innerText={"Our Work"} />
                            <NavItemComponent innerText={"Blog"} />
                        </Navbar.NavbarUl>
                    </Navbar.NavDiv>
                    <Navbar.NavDiv className="col-12 col-sm-12 col-md-2 d-flex justify-content-end pe-5">
                        <Navbar.LightIcon className="fas fa-bars bars"></Navbar.LightIcon>
                    </Navbar.NavDiv>
                </Navbar.NavDiv>
            </Navbar.NavDiv>
        </Navbar.NavbarDivComponent>
    );
}

export default NavbarComponent;
