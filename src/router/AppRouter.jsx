import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import ProductDetail from "../pages/ProductDetail";
import { useAuthContext } from "../context/AuthProvider";

const AppRouter = () => {

 const { showNav,setShowNav} =useAuthContext()
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard/"
          element={<PrivateRouter setShowNav={setShowNav} showNav={showNav} />}
        >
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
         
        </Route>
        <Route path="*" element={<NotFound showNav={showNav} />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
