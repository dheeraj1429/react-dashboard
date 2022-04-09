import React from "react";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";
import IconWithContentComponent from "../IconWithContentComponent/IconWithContentComponent";
import * as Agency from "./AgencyComponent.style";

function AgencyComponent() {
    return (
        <Agency.Section className="top_padding" id="aboutUs">
            <Agency.AgenceDiv className="container-fluid side_padding">
                <Agency.AgenceDiv className="row py-5 justify-content-center">
                    <Agency.AgenceDiv className="col-12 col-sm-12 col-md-5"></Agency.AgenceDiv>
                    <Agency.AgenceDiv className="col-12 col-sm-12 col-md-4">
                        <Agency.AgenceBoldHading>Basic Info about company</Agency.AgenceBoldHading>
                        <CreativHeadingComponent Heading={"New Art"} subHeading={"Work"} />
                    </Agency.AgenceDiv>
                    <Agency.AgenceDiv className="col-12 col-sm-12 col-md-5 pe-5 pt-4">
                        <Agency.Agencypara>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor
                            nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam
                            porttitor justo sed mi finibus, vel tristique risus faucibus.
                        </Agency.Agencypara>
                        <Agency.Agencypara>
                            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor
                            nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.
                        </Agency.Agencypara>
                    </Agency.AgenceDiv>
                </Agency.AgenceDiv>

                <Agency.AgenceDiv className="row pt-4 pb-5 justify-content-center">
                    <IconWithContentComponent
                        icon={"fas fa-lightbulb"}
                        conetnt={"We have some investment ideas for you."}
                    />
                    <IconWithContentComponent icon={"fas fa-briefcase"} conetnt={"Your business is our top priorty."} />
                    <IconWithContentComponent icon={"fas fa-heart"} conetnt={"We love our valued customers"} />
                </Agency.AgenceDiv>
            </Agency.AgenceDiv>
        </Agency.Section>
    );
}

export default AgencyComponent;
