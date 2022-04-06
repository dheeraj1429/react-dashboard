import React from "react";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";
import IconWithContentComponent from "../IconWithContentComponent/IconWithContentComponent";

import "./AgencyComponent.css";

function AgencyComponent() {
    return (
        <div className="agency_section_div top_padding">
            <div className="container-fluid side_padding">
                <div className="row py-5 justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5"></div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <h5>Basic Info about company</h5>
                        <CreativHeadingComponent Heading={"New Art"} subHeading={"Work"} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 pe-5 pt-4">
                        <p>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor
                            nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam
                            porttitor justo sed mi finibus, vel tristique risus faucibus.
                        </p>
                        <p>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor
                            nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.
                        </p>
                    </div>
                </div>

                <div className="row py-4 justify-content-center">
                    <IconWithContentComponent
                        icon={"fas fa-lightbulb"}
                        conetnt={"We have some investment ideas for you."}
                    />
                    <IconWithContentComponent icon={"fas fa-briefcase"} conetnt={"Your business is our top priorty."} />
                    <IconWithContentComponent icon={"fas fa-heart"} conetnt={"We love our valued customers"} />
                </div>
            </div>
        </div>
    );
}

export default AgencyComponent;
