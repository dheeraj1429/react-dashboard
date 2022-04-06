import React, { useEffect, useState } from "react";
import NavItemComponent from "../NavItemComponent/NavItemComponent";

import "./NavbarComponent.css";

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
        <div className={!LightNv ? "Navbar_div navbar_inner_div" : "Navbar_div navbar_inner_div light_cl"}>
            <div className="container-fluid side_padding">
                <div className="row py-4">
                    <div className="col-12 col-sm-12 col-md-2"></div>
                    <div className="col-12 col-sm-12 col-md-8">
                        <ul>
                            <NavItemComponent innerText={"Home"} />
                            <NavItemComponent innerText={"About Us"} />
                            <NavItemComponent innerText={"Our Work"} />
                            <NavItemComponent innerText={"Blog"} />
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 d-flex justify-content-end pe-5">
                        <i class="fas fa-bars bars"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;
