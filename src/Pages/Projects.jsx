import React from "react";
import ProjectComp from "../Components/Projects/Projects";
import ScrollToTop from "../HelperComponents/ScrollToTop/ScrollToTop";


const Projects = () => {
    return (
        <>
            <ScrollToTop />
            <ProjectComp listLength={-1} />
        </>
    );
};

export default Projects;