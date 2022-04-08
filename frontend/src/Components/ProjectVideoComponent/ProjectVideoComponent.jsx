import React from "react";
import * as PrVid from "./ProjectVideoComponent.style";

function ProjectVideoComponent({ cl }) {
    return (
        <PrVid.div className="col-12 col-sm-12 col-md-4">
            <div
                className="project_vid_div"
                style={
                    cl
                        ? {
                              marginTop: "60px",
                          }
                        : null
                }
            >
                <video src="/videos/vide1.mp4" autoPlay loop></video>
            </div>
        </PrVid.div>
    );
}

export default ProjectVideoComponent;
