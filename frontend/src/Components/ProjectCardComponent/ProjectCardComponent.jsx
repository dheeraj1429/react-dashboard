import React, { useState } from "react";
import * as ProjectCart from "./ProjectCartComponent.style";
import { AgenceBoldHading } from ".././AgencyComponent/AgencyComponent.style";

function ProjectCardComponent({ Link, repoLink, heading, subHeading, bg, cl }) {
    const [Icons, setIcons] = useState([
        { el: "fas fa-search", link: Link },
        { el: "fas fa-code", link: repoLink },
    ]);
    return (
        <ProjectCart.div
            className={
                !cl
                    ? "col-12 col-sm-12 col-md-4 mt-4 products_card_div"
                    : `col-12 col-sm-12 col-md-4 mt-4 products_card_div ${cl}`
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
