import React from "react";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";
import IconComponent from "../IconComponent/IconComponent";

import * as Banner from "./BannerComponent-style";

function BannerComponent() {
    return (
        <Banner.BannerDiv>
            <Banner.Div className="container-fluid side_padding">
                <Banner.Div className="row py-5">
                    <Banner.Div className="col-12 col-sm-12 col-md-4"></Banner.Div>
                    <Banner.Div className="col-12 col-sm-12 col-md-6 text-end">
                        <Banner.BannerPara>Lorem ipsum dolor sit amet</Banner.BannerPara>
                        <CreativHeadingComponent Heading={"Creative"} subHeading={"Design"} />
                        <Banner.BannerBoldHeading className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus <br />
                            delectus quos eligendi voluptatem debitis
                        </Banner.BannerBoldHeading>

                        <Banner.Div className="mt-4">
                            <CustomButtonComponent cl={"Learn_more_btn"} />
                        </Banner.Div>
                    </Banner.Div>
                    <Banner.Div className="col-12 col-sm-12 col-md-2 d-flex justify-content-end pe-5">
                        <Banner.Div className="mt-5">
                            <IconComponent icon={"fab fa-facebook-f"} />
                            <IconComponent icon={"fab fa-twitter"} />
                            <IconComponent icon={"fab fa-instagram"} />
                            <IconComponent icon={"fab fa-linkedin"} />
                        </Banner.Div>
                    </Banner.Div>
                </Banner.Div>
            </Banner.Div>
        </Banner.BannerDiv>
    );
}

export default BannerComponent;
