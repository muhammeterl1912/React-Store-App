import { FiLogOut } from "react-icons/fi";
import { NavLink,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-primary h-20 flex gap-10 ">
      <h3 className="text-3xl mb-3 inline p-3 font-extrabold uppercase w-[20%] flex items-center">
    
        <Link to={"/home"}>Erol Store</Link>
      </h3>
      <ul className="flex  w-[30%] items-center uppercase gap-7 p-5 justify-between text-lg ">
        <li className="nav-text-hover">
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li  className="nav-text-hover">
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li className="nav-text-hover">
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
      <div className="w-[50%] flex gap-1 items-center justify-end m-5 uppercase text-lg nav-text-hover"><NavLink to={"/"}> Logout</NavLink><FiLogOut/></div>
    </div>
  );
};

export default Navbar;
