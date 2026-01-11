import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Login Now!</h2>
      <div className="px-6 md:px-20 min-h-screen">
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <label className="label text-white">Email</label>
            <input
              type="email"
              //   defaultValue={demoEmail}
              {...register("email", { required: true })}
              className="input outline-none w-full shadow-xl"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-xs text-red-500">Email is required</span>
            )}
            <label className="label text-white">Password</label>
            <input
              type="password"
              //   defaultValue={demoPass}
              {...register("password", { required: true })}
              className="input outline-none w-full shadow-xl"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-xs text-red-500">Password is required</span>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-[#471396] border-[#e5e5e5] text-white mt-4 w-full">
              Login
            </button>
          </fieldset>
          <button
            // onClick={handleGoogleLogin}
            className="btn bg-[#471396] text-white border-[#e5e5e5] shadow-xl w-full mt-2">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            New to this website? Please{" "}
            <Link to="/auth/register" className="text-[#B13BFF]">
              Sign Up
            </Link>
          </p>
        </form>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <button
            // onClick={handleLoginAsAdmin}
            className="btn bg-[#471396] border-[#e5e5e5] text-white mt-4">
            Demo Login as Admin
          </button>
          <button
            // onClick={handleLoginAsManager}
            className="btn bg-[#471396] border-[#e5e5e5] text-white mt-4">
            Demo Login as Manager
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
