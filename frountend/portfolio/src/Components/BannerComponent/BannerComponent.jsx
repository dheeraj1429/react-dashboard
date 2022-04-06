import React from "react";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";
import IconComponent from "../IconComponent/IconComponent";

import "./BannerComponent.css";

function BannerComponent() {
    return (
        <div className="Banner_div">
            <div className="container-fluid side_padding">
                <div className="row py-5">
                    <div className="col-12 col-sm-12 col-md-4"></div>
                    <div className="col-12 col-sm-12 col-md-6 text-end">
                        <p>Lorem ipsum dolor sit amet</p>
                        <CreativHeadingComponent Heading={"Creative"} subHeading={"Design"} />
                        <h5 className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus <br />
                            delectus quos eligendi voluptatem debitis
                        </h5>

                        <div className="mt-4">
                            <CustomButtonComponent cl={"Learn_more_btn"} />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 d-flex justify-content-end pe-5">
                        <div className="mt-5">
                            <IconComponent icon={"fab fa-facebook-f"} />
                            <IconComponent icon={"fab fa-twitter"} />
                            <IconComponent icon={"fab fa-instagram"} />
                            <IconComponent icon={"fab fa-linkedin"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerComponent;
