import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../context/AuthProvider";

const PrivateRouter = () => {
  const { user, setShowNav, showNav } = useAuthContext();


  return showNav ? (
    <>
      {
        <div>
          {user.email === "muhammet@gmail.com" && user.password === "123" && (
            <>
              <Navbar /> <Outlet />
            </>
          )}
        </div>
      }
    </>
  ) :
   (
    <Navigate
      to="/
    "
    />
  );
};
export default PrivateRouter;
