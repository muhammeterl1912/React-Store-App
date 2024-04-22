import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRouter = ({ showNav }) => {
  return <>{showNav && <Outlet />} </>;
};

export default PrivateRouter;
