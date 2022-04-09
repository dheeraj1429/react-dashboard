import React, { useState } from "react";
import { AgenceBoldHading } from ".././AgencyComponent/AgencyComponent.style";

import * as ProjectCart from "./ProjectCartComponent.style";

function ProjectCardComponent({ Link, repoLink, heading, subHeading, bg, cl, icon }) {
    const [Icons, setIcons] = useState([
        { el: icon, link: Link },
        { el: "fas fa-code", link: repoLink },
    ]);

    return (
        <ProjectCart.div
            className={`col-12 col-sm-12 col-md-4 project_card_div`}
            style={
                cl
                    ? {
                          marginTop: "40px",
                      }
                    : null
            }
        >
            <ProjectCart.ProjectCartDiv>
                <ProjectCart.imagePrv
                    className="img_prev_div"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                ></ProjectCart.imagePrv>

                {Icons.map((el) => (
                    <ProjectCart.open className="open me-4">
                        <a href={el.link}>
                            <ProjectCart.i className={el.el}></ProjectCart.i>
                        </a>
                    </ProjectCart.open>
                ))}
            </ProjectCart.ProjectCartDiv>

            <ProjectCart.postConetnt className="post_content_div">
                <AgenceBoldHading className="mb-0 mt-3">{heading}</AgenceBoldHading>
                <ProjectCart.p className="mt-2">{subHeading}</ProjectCart.p>
            </ProjectCart.postConetnt>
        </ProjectCart.div>
    );
}

export default ProjectCardComponent;
