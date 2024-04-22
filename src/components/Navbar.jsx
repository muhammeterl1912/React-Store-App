import { FiLogOut } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav
      className={`bg-primary h-20 flex justify-between ${
        !show && "h-[30vh] flex items-start border "
      }`}
    >
      <h3
        className={`lg:text-3xl md:text-sm mb-3 p-3 font-extrabold uppercase w-[30%] lg:w-[20%] flex items-center ${
          show && "items-start"
        }`}
      >
        <Link to={"/home"}>Erol Store</Link>
      </h3>

      {!show && (
        <ul
          className={`flex w-[40%] items-center uppercase p-5  justify-between text-xs ${
            !show && "flex flex-col gap-4 text-sm md:hidden"
          }`}
        >
          <li className="nav-text-hover">
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li className="nav-text-hover">
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li className="nav-text-hover">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <div className="flex gap-1 items-center justify-end m-5 uppercase text-xs nav-text-hover">
            <NavLink to={"/"}>Logout</NavLink>
            <FiLogOut />
          </div>
        </ul>
      )}
      <ul
        className={`lg:flex w-[40%] items-center uppercase p-5 justify-between hidden `}
      >
        <li className="nav-text-hover">
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li className="nav-text-hover">
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li className="nav-text-hover">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <div
          className={`flex gap-1 items-center justify-end m-5 uppercase text-lg nav-text-hover`}
        >
          <NavLink to={"/"}>Logout</NavLink>
          <FiLogOut />
        </div>
      </ul>

      <div className="w-[10%] mr-9 flex justify-between items-center md:hidden">
        <button
          className="text-3xl"
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          {!show ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
