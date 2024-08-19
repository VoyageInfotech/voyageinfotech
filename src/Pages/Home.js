import React from "react";
import HeroSlider from "../Component/Home/HeroSlider";
import OurServices from "../Component/Home/OurServices";
import BusinessOutComes from "../Component/Home/BusinessOutComes";
import OurApproach from "../Component/Home/OurApproach";
import WhyChoose from "../Component/Home/WhyChoose";
import ClientsTestimonil from "../Component/Home/ClientTestimonial";
import NavTabs from "../Component/Home/Technology/NavTabs";

function Home() {
  return (
    <>
      {/* Hero slider */}
      <HeroSlider />
      {/* Why Choose Deoweb */}
      <WhyChoose />
      {/* Our Approach */}
      <OurApproach />
      {/* Bussiness OutComes */}
      <BusinessOutComes />
      
      {/* Our Services */}
      <OurServices />
      {/* Technology */}
      <NavTabs/>
      {/* Client Testimonial */}
      <ClientsTestimonil/>
    </>
  );
}

export default Home;
