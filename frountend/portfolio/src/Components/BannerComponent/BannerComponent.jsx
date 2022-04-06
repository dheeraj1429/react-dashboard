import React from "react";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";

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
                    <div className="col-12 col-sm-12 col-md-2"></div>
                </div>
            </div>
        </div>
    );
}

export default BannerComponent;
