import React from "react";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";
import ProjectCardComponent from "../ProjectCardComponent/ProjectCardComponent";

import "./AbouMeComponent.css";

function AbouMeComponent() {
    return (
        <div className="agency_section_div about_me_div top_padding">
            <div className="container-fluid pb-5">
                <div className="row side_padding">
                    <div className="col-12 text-center">
                        <h5 className="mb-3">Basic Info about work</h5>
                        <CreativHeadingComponent Heading={"All"} subHeading={"Projects"} cl={"heading_two_cl"} />
                        <p className="mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatem <br /> molestias
                            dolores sit?
                        </p>
                    </div>

                    <ProjectCardComponent
                        Link={"https://yt-clone-react-app.herokuapp.com/"}
                        repoLink={"https://github.com/dheeraj1429/react-youtube-clone"}
                        heading={"React youtube clone"}
                        subHeading={
                            "Designed the interface of a TV show tracking app and content hunting app downloaded by 100K  users."
                        }
                        bg={"/images/movi-app.jpg"}
                    />

                    <ProjectCardComponent
                        Link={"https://dameda-ecommerce-app.herokuapp.com/"}
                        repoLink={"https://github.com/dheeraj1429/Damita-Ecommerce.git"}
                        heading={"Dameda Ecommerce Website"}
                        subHeading={"Created this concept watch face animation for a smart ecommerce website"}
                        bg={"/images/ec.jpeg"}
                    />
                </div>
            </div>
        </div>
    );
}

export default AbouMeComponent;
