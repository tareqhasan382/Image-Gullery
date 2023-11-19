import Login from "@/components/Login";
import React from "react";

const page = () => {
  return (
    <div className=" mt-24 flex flex-col  items-center justify-center ">
      <h1 className=" text-4xl font-bold ">This is Login Page</h1>
      <div className=" w-full ">
        <Login />
      </div>
    </div>
  );
};

export default page;
