import React from "react";
import ContactUs from "../Component/Contact/ContactUs";
import PageTitle from "../Global/PageTitle";

function Contact() {
  return (
    <>
      <PageTitle
        title={`Contact`}
        description={`If you have any questions or need assistance, please don't hesitate to contact us. We would love to hear from you. `}
      />
      <ContactUs />
    </>
  );
}

export default Contact;
