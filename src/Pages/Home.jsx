import React from "react";
import QuoteOfDay from "../Components/QuoteOfDay/QuoteOfDay";
import IntroSection from "../Components/IntroSection/IntroSection";
import CPStatusCard from "../Components/CPStatusCard/CPStatusCard";
import Projects from "../Components/Projects/Projects";
import Blogs from "../Components/Blogs/Blogs";
import ScrollToTop from "../HelperComponents/ScrollToTop/ScrollToTop";


const Home = () => {
    return (
        <>
            <ScrollToTop />
            <QuoteOfDay />
            <IntroSection />
            <CPStatusCard />
            <Projects listLength={2} readMore={{"url": "/projects", "blockName": "More Projects"}}/>
            <Blogs readMore={{"url": "/blogs", "blockName": "More Blogs"}}/>
        </>
    );
};

export default Home;
