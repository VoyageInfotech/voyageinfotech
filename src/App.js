import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Global/Header";
import Home from "./Pages/Home";
import Loader from "./Global/Loader";
import Footer from "./Global/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";

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
      <Header />
      <ScrollToTop />
      {loading ? (
        <Loader/>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
      

          {/* Fallback Route */}
          {/* <Route path="*" element={<NoPageFound />} /> */}
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;