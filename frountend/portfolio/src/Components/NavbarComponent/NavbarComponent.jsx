import React from "react";
import NavItemComponent from "../NavItemComponent/NavItemComponent";

import "./NavbarComponent.css";

function NavbarComponent() {
    return (
        <div className="Navbar_div navbar_inner_div">
            <div className="container-fluid side_padding">
                <div className="row py-5">
                    <div className="col-12 col-sm-12 col-md-2"></div>
                    <div className="col-12 col-sm-12 col-md-8">
                        <ul>
                            <NavItemComponent innerText={"Home"} />
                            <NavItemComponent innerText={"About Us"} />
                            <NavItemComponent innerText={"Our Work"} />
                            <NavItemComponent innerText={"Blog"} />
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 d-flex justify-content-end">
                        <i class="fas fa-bars bars"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;
