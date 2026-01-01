import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 items-center min-h-screen bg-gray-100">
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
