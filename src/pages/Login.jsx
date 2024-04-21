import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email,password)
  }
  return (
    <div className="login-container">
      <form class="formContainer"  onSubmit={handleSubmit}>
        <h3 className="brand-title">Erol Store</h3>
        <h5 className="text-xl mb-3 text-center p-1">SIGN IN</h5>
        <p className=" mb-3 text-center p-1 text-black text-opacity-60">
          Enter your credentials to access your account
        </p>
        <label
          htmlFor="e-mail"
          className=" text-black text-opacity-40 cursor-pointer"
        >
          Email:
        </label>
        <input
          type="email"
          id="e-mail"
          placeholder="Enter your E-mail"
          className="border focus:outline-primary p-2 mt-2 block w-[100%] rounded "
          onChange={e=>setEmail(e.target.value)}
        />
        <label
          htmlFor="password"
          className=" text-black text-opacity-40 cursor-pointer"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          className="border focus:outline-yellow-400 p-2 mt-2 block w-[100%] rounded"
          onChange={e=>setPassword(e.target.value)}
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
