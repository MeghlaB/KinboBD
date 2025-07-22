import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { TChildren } from "../layout";

const Mainlayout = ({ children }:TChildren) => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen"> {children}</div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
