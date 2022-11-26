import React from 'react';
import Hero from "components/Hero/Hero";
import Integrations from "components/Integrations/Integrations";
import VideoGuide from "components/VideoGuide/VideoGuide";
import WhyUseAim from "components/WhyUseAim/WhyUseAim";
import Demo from "components/Demo/Demo";
import GetStarted from "components/GetStarted/GetStarted";
import Subscribe from "components/Subscribe/Subscribe";

const Index = () => {
    return (
        <div>
            <Hero/>
            <Integrations/>
            <VideoGuide/>
            <GetStarted/>
            <WhyUseAim/>
            <Demo/>
            <Subscribe/>
        </div>
    );
};

export default Index;
