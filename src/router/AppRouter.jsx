import { Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home"

const AppRouter = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>

  )
}

export default AppRouter