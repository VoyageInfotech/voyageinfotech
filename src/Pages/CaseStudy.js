import React from "react";
import PageTitle from "../Global/PageTitle";
import CaseStudys from "../Component/CaseStudy/CaseStudys";
function CaseStudy() {
  return (
    <>
      <PageTitle
        title={`Case Study`}
        description={`  Start working with Devotee Infotech that can provide everything you need to generate awareness, drive traffic, connect.  `}
      />
      <CaseStudys/>
    </>
  );
}

export default CaseStudy;
