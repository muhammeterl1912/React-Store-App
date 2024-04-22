import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../context/AuthProvider";
import PrivateRouter from "./PrivateRouter";
import { useState } from "react";

const AppRouter = () => {
  const { user } = useAuthContext();
  const [showNav, setShowNav] = useState(true);

  return (
    <div>
     {showNav &&  <div>{user.email === "muhammet@gmail.com" && user.password === "123" && (
        <Navbar setShowNav={setShowNav} />
      )}</div>}
      <Routes>
        <Route path="/" element={<Login setShowNav={setShowNav}/>} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound showNav={showNav} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
