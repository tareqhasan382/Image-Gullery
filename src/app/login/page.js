import Login from "@/components/Login";
import React from "react";

const page = () => {
  return (
    <div className=" mt-24 flex flex-col  items-center justify-center ">
      {/* <h1 className=" text-4xl font-bold ">This is Login Page</h1> */}
      <h2 className=" lg:text-5xl text-center text-3xl font-bold font-sans ">
        Welcome to <span className=" text-green-500 ">Login Page</span>
      </h2>
      <div className=" w-full ">
        <Login />
      </div>
    </div>
  );
};

export default page;
