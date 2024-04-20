const Login = () => {
  return (
    <div className="h-[100vh] bg-yellow-400 flex justify-center items-center">
      <form class="bg-white rounded-[1rem] p-9 sm:p-10 md:w-2/2">
        <h3 className="text-3xl mb-3 text-center p-3 font-extrabold uppercase">
          Erol Store
        </h3>
        <h5 className="text-xl mb-3 text-center p-1">SIGN IN</h5>
        <p className=" mb-3 text-center p-1 text-black text-opacity-60">
          Enter your credentials to access your account
        </p>
        <label htmlFor="e-mail" className=" text-black text-opacity-40">
          Email:
        </label>
        <input
          type="email"
          id="e-mail"
          className="border focus:outline-yellow-400 p-2 mt-2 block w-[100%] rounded "
        />
        <label htmlFor="password" className=" text-black text-opacity-40">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="border focus:outline-yellow-400 p-2 mt-2 block w-[100%] rounded"
        />
        <input
          type="submit"
          className="w-[100%] bg-yellow-400 text-white block m-auto mt-6 p-2 cursor-pointer"
          value={"SIGN IN"}
        />
        <p className="text-black text-opacity-30 mt-2 ">Did you forget your Password?<span className="mx-5 text-yellow-400 underline">Reset Your Password</span>
</p>

      </form>
    </div>
  );
};

export default Login;
