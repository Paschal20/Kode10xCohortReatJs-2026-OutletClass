import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="w-25 h-full bg-green-600">
          <Footer />
        </div>
        <div className="w-full h-17.5 bg-blue-500">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
