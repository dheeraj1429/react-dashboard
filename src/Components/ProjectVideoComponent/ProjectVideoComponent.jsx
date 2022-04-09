import React from "react";
import * as PrVid from "./ProjectVideoComponent.style";

function ProjectVideoComponent({ cl, src }) {
    return (
        <PrVid.div className="col-12 col-sm-12 col-md-4 mt-2">
            <div
                className="project_vid_div"
                style={
                    cl
                        ? {
                              marginTop: "50px",
                          }
                        : null
                }
            >
                <video src={src} autoPlay loop muted playsinline className="videoElm"></video>
            </div>
        </PrVid.div>
    );
}

export default ProjectVideoComponent;
