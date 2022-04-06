import React from "react";
import BannerComponent from "../../Components/BannerComponent/BannerComponent";
import AgencyComponent from "../../Components/AgencyComponent/AgencyComponent";
import AbouMeComponent from "../../Components/AbouMeComponent/AbouMeComponent";

import "./HomePage.css";

function HomePage() {
    return (
        <div className="Home_page">
            <BannerComponent />
            <AgencyComponent />
            <AbouMeComponent />
        </div>
    );
}

export default HomePage;
