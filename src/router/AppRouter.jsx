import { Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>

  )
}

export default AppRouter