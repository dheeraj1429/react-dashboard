import React from "react";
import BannerComponent from "../../Components/BannerComponent/BannerComponent";
import AgencyComponent from "../../Components/AgencyComponent/AgencyComponent";
import AbouMeComponent from "../../Components/AbouMeComponent/AbouMeComponent";
import MastringComponent from "../../Components/MastringComponent/MastringComponent";
import WorkSkillesComponent from "../../Components/WorkSkillesComponent/WorkSkillesComponent";

function HomePage() {
    return (
        <div className="Home_page">
            <BannerComponent />
            <AgencyComponent />
            <MastringComponent bg={"/images/a.jpg"} />
            <AbouMeComponent />
            <WorkSkillesComponent />
        </div>
    );
}

export default HomePage;
