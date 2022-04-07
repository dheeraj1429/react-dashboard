import React, { useState } from "react";

import "./ProjectCardComponent.css";

function ProjectCardComponent({ Link, repoLink, heading, subHeading, bg }) {
    const [Icons, setIcons] = useState([
        { el: "fas fa-search", link: Link },
        { el: "fas fa-code", link: repoLink },
    ]);
    return (
        <div className="col-12 col-sm-12 col-md-4 mt-4 products_card_div">
            <div className="project_contaienr_div">
                <div
                    className="img_prev_div"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                ></div>

                {Icons.map((el) => (
                    <div className="open me-4">
                        <a href={el.link}>
                            <i class={el.el}></i>
                        </a>
                    </div>
                ))}
            </div>

            <div className="post_content_div">
                <h5 className="mb-0 mt-3">{heading}</h5>
                <p className="mt-2">{subHeading}</p>
            </div>
        </div>
    );
}

export default ProjectCardComponent;
