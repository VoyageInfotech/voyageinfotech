import React from "react";
import PageTitle from "../Global/PageTitle";
import Career from '../Component/Career/Career';

function Careers() {
  return (
    <>
      <PageTitle
        title={`Career`}
        description={` At Voyage Infotech, individuals can pursue a career in software development, design, testing, project management, and more.  `}
      />
      {/* ===============Why Join Us===== */}
      <Career/>
    </>
  );
}

export default Careers;
