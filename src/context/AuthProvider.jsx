import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const login = (param) => {
    setUser(param);
    navigate("/home");
  };
console.log(user)
  return (
    <div>
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
