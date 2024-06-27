import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Component";

function PrivateLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PrivateLayout;
