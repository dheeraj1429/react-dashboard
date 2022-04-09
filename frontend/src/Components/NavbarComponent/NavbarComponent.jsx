import React, { useState, useEffect } from "react";
import NavItemComponent from "../NavItemComponent/NavItemComponent";
import * as Navbar from "./NavbarComponent.style";

function NavbarComponent() {
    const [LightNv, setLightNv] = useState(false);
    const [TargetId, setTargetId] = useState("");

    const section = document.querySelectorAll("section");

    const observerFunction = function () {
        const option = {
            root: null,
            threshold: 0,
            rootMargin: "-120px",
        };

        const callback = function (entries, observe) {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;

                const target = e.target;
                const id = target.getAttribute("id");
                setTargetId(id);
            });
        };

        const observr = new IntersectionObserver(callback, option);

        section.forEach((el) => {
            observr.observe(el);
        });
    };

    const scrollFuntion = function () {
        window.addEventListener("scroll", function (e) {
            if (this.scrollY >= 100) {
                setLightNv(true);
            } else {
                setLightNv(false);
            }
        });
    };

    useEffect(() => {
        observerFunction();
        scrollFuntion();
    }, []);

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
                            <NavItemComponent innerText={"Home"} value={TargetId} />
                            <NavItemComponent innerText={"About Us"} value={TargetId} />
                            <NavItemComponent innerText={"creative"} value={TargetId} />
                            <NavItemComponent innerText={"Projects"} value={TargetId} />
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
