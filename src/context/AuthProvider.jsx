import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const login = (param) => {
    setUser(param);
    navigate("/dashboard/home");
  };

  return (
    <div>
      <AuthContext.Provider value={{ user, login,showNav,setShowNav}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
