import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Global/Header";
import Home from "./Pages/Home";
import Loader from "./Global/Loader";
import Footer from "./Global/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import CaseStudy from "./Pages/CaseStudy";

// MUI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat"; // Alternative for Skype
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GetAqoate from "./Global/GetAqoate";
import Resume from "./Component/Career/Resume";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="main-outer">
        <div className="social-inner">
          <ul>
            <li>
              <Link to="https://wa.me/9537605003">
                <div className="watshapp social">
                  <WhatsAppIcon />
                  <span>+91 9537605003</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="skype social">
                  <ChatIcon />
                  <span>Voyageinfotech</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="mailto:Voyageinfotechtech9@gail.com">
                <div className="email social">
                  <EmailIcon />
                  <span>voyageinfotech01@gmail.com</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/get-in-qoute">
                <div className="contact social">
                  <ContactPhoneIcon />
                  <span>Contact Us</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <Header />
        <ScrollToTop />
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/get-in-qoute" element={<GetAqoate />} />

            {/* Fallback Route */}
            {/* <Route path="*" element={<NoPageFound />} /> */}
          </Routes>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
