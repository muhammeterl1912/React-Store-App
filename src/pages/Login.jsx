import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login,setShowNav } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (email === "muhammet@gmail.com" && password === "123") {

      login({ email, password });
      setShowNav(true)
    } else {
      alert("Wrong email or password!!!");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="login-container">
      <form class="formContainer" onSubmit={handleSubmit}>
        <h3 className="brand-title">Erol Store</h3>
        <h5 className="text-xl mb-3 text-center p-1">SIGN IN</h5>
        <p className=" mb-3 text-center p-1 text-black text-opacity-60">
          Enter your credentials to access your account
        </p>
        <label
          htmlFor="e-mail"
          className=" text-black text-opacity-40 cursor-pointer email-hover"
        >
          Email:
        </label>
        <input
          type="email"
          id="e-mail"
          placeholder="Enter your E-mail"
          className="border focus:outline-primary p-2 mt-2 block w-[100%] rounded "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label
          htmlFor="password"
          className=" text-black text-opacity-40 cursor-pointer password-hover"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          className="border focus:outline-yellow-400 p-2 mt-2 block w-[100%] rounded"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="submit"
          className="w-[100%] bg-primary text-secondary block m-auto mt-6 p-2 cursor-pointer hover:opacity-90"
          value={"SIGN IN"}
        />
        <p className="text-black text-opacity-30 mt-2 ">
          Did you forget your Password?
          <span className="mx-5 text-primary underline">
            Reset Your Password
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
