import React from "react";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";
import { AgenceBoldHading } from "../AgencyComponent/AgencyComponent.style";
import * as Work from "./WorkSkillesComponent.style";

function WorkSkillesComponent() {
    return (
        <Work.Section>
            <Work.contentDiv className="container-fluid">
                <Work.row className="row">
                    <Work.col className="col-12 col-sm-12 col-md-6">
                        <Work.contentDiv>
                            <AgenceBoldHading>CREATION</AgenceBoldHading>
                            <CreativHeadingComponent Heading={"Got an"} subHeading={"idea?"} />
                        </Work.contentDiv>
                    </Work.col>
                    <Work.col className="col-12 col-sm-12 col-md-6">
                        <img
                            src="https://megaone.acrothemes.com/corporate-agency/images/team-img3.jpg"
                            className="img-fluid"
                            alt=""
                        />
                    </Work.col>
                </Work.row>
            </Work.contentDiv>
        </Work.Section>
    );
}

export default WorkSkillesComponent;
