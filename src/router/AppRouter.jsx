import { Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../context/AuthProvider";

const AppRouter = () => {
  const {user} = useAuthContext()
  console.log(user)

  return (
<div>
{user.email === "muhammet@gmail.com" &&user.password==="123" && <Navbar/>}
    <Routes>
    
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
</div>

  )
}

export default AppRouter