import React from "react";
import PageTitle from "../Global/PageTitle";
import Aboutus from "../Component/About/Aboutus";
import WhyChoose from "../Component/About/WhyChoose";
import OurGoal from "../Component/About/OurGoal";
import Features from "../Component/About/Features";

function About() {
  return (
    <>
      <PageTitle
        title={`About`}
        description={`Devotee Infotech is a dynamic and innovative software solutions provider, founded with the aim of providing exceptional technology services to businesses of all sizes. `}
      />
      {/* About */}
      <Aboutus />

      {/* Why choose Us */}
      <WhyChoose />
      {/* Our Features */}
      <Features />
      {/* Our Goal */}
      <OurGoal />
    </>
  );
}

export default About;
