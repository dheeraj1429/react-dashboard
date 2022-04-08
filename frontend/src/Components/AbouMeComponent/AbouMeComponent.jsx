import React from "react";
import CreativHeadingComponent from "../CreativHeadingComponent/CreativHeadingComponent";
import ProjectCardComponent from "../ProjectCardComponent/ProjectCardComponent";
import ProjectVideoComponent from "../ProjectVideoComponent/ProjectVideoComponent";
import { Div, Agencypara, AgenceDiv, AgenceBoldHading } from "../AgencyComponent/AgencyComponent.style";

function AbouMeComponent() {
    return (
        <Div className="agency_section_div about_me_div top_padding">
            <AgenceDiv className="container-fluid pb-5">
                <AgenceDiv className="row side_padding">
                    <AgenceDiv className="col-12 text-center">
                        <AgenceBoldHading className="mb-3">Basic Info about work</AgenceBoldHading>
                        <CreativHeadingComponent Heading={"All"} subHeading={"Projects"} cl={"heading_two_cl"} />
                        <Agencypara className="mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatem <br /> molestias
                            dolores sit?
                        </Agencypara>
                    </AgenceDiv>

                    <ProjectCardComponent
                        Link={"https://yt-clone-react-app.herokuapp.com/"}
                        repoLink={"https://github.com/dheeraj1429/react-youtube-clone"}
                        heading={"React youtube clone"}
                        subHeading={
                            "Designed the interface of a TV show tracking app and content hunting app downloaded by 100K  users."
                        }
                        bg={"/images/movi-app.jpg"}
                        icon={"fas fa-search"}
                    />

                    <ProjectCardComponent
                        Link={"https://dameda-ecommerce-app.herokuapp.com/"}
                        repoLink={"https://github.com/dheeraj1429/Damita-Ecommerce.git"}
                        heading={"Dameda Ecommerce Website"}
                        subHeading={"Created this concept watch face animation for a smart ecommerce website"}
                        bg={"/images/ec.jpeg"}
                        cl={"cart_extra_cl"}
                        icon={"fas fa-search"}
                    />

                    <ProjectCardComponent
                        Link={""}
                        repoLink={"https://github.com/dheeraj1429/spotify-clone.git"}
                        heading={"Spotify Clone"}
                        subHeading={"Created this concept watch face animation for a smart ecommerce website"}
                        bg={"/images/music.jpg"}
                        icon={"fas fa-search"}
                    />

                    <ProjectCardComponent
                        Link={"https://codepen.io/Dee_art_3d/pen/vYZwpKM"}
                        repoLink={"https://codepen.io/Dee_art_3d/pen/vYZwpKM"}
                        heading={"Pure CSS Mobile Dasign"}
                        subHeading={"Created this concept watch face animation for a smart ecommerce website"}
                        bg={"/images/moble.png"}
                        icon={"fas fa-search"}
                    />

                    {/* <ProjectCardComponent
                        Link={"https://codepen.io/Dee_art_3d/pen/XWMvNob?editors=0010"}
                        repoLink={"https://codepen.io/Dee_art_3d/pen/XWMvNob?editors=0010"}
                        heading={"HTML CSS JS Wether App"}
                        subHeading={"Created this concept watch face animation for a smart ecommerce website"}
                        bg={"/images/wether.jpg"}
                        cl={"cart_extra_cl"}
                        icon={"fas fa-search"}
                    /> */}

                    <ProjectVideoComponent cl={"extra_cl"} />

                    <ProjectCardComponent
                        Link={"https://github.com/dheeraj1429?tab=repositories"}
                        repoLink={"https://codepen.io/your-work/"}
                        heading={"All Projects"}
                        subHeading={"Created this concept watch face animation for a smart ecommerce website"}
                        bg={"/images/project.jpg"}
                        icon={"fab fa-github"}
                    />
                </AgenceDiv>
            </AgenceDiv>
        </Div>
    );
}

export default AbouMeComponent;
