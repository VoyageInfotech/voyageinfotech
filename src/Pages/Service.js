import React from "react";
import PageTitle from "../Global/PageTitle";
import Services from "../Component/Service/Services";

function Service() {
  return (
    <>
      <PageTitle
        title={`Services`}
        description={` Deoweb  is a leading technology company that offers a wide range of services to help businesses grow and succeed in today's competitive digital landscape  `}
      />
      <Services/>
    </>
  );
}

export default Service;
