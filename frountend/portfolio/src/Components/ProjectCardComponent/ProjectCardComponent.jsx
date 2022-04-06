import React, { useState } from "react";

import "./ProjectCardComponent.css";

function ProjectCardComponent({ Link, repoLink }) {
    const [Icons, setIcons] = useState([
        { el: "fas fa-search", link: Link },
        { el: "fas fa-code", link: repoLink },
    ]);
    return (
        <div className="products_card_div">
            <div className="col-12 col-sm-12 mt-4">
                <div className="project_contaienr_div">
                    {Icons.map((el) => (
                        <div className="open me-4">
                            <a href={el.link}>
                                <i class={el.el}></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCardComponent;
