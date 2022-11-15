import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UseUserContext } from "../context/useContext";

const Login = () => {
  const { user, login } = UseUserContext();
  console.log(user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.name === "foo" && data.pass === "bar") {
      login(data.name);
    }
  };
  return (
    <div className="flex justify-center my-16 container mx-auto md:px-0 px-8">
      <div className="  bg-gray-500 inline-block py-8 px-6">
        <h3 className="text-2xl font-bold ">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full border-2 border-black py-2 px-2 rounded-md mt-3"
            {...register("name")}
            placeholder="Username"
            type="text"
            required
          />
          <br />
          <input
            className="w-full border-2 border-black py-2 px-2 rounded-md mt-3"
            {...register("pass")}
            placeholder="Password"
            type="password"
            required
          />

          <input
            className="w-full border-2 border-black py-2 px-2 rounded-md mt-3"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
