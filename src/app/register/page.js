import Register from "@/components/Register";
import React from "react";

const page = () => {
  return (
    <div className=" mt-24 flex flex-wrap  items-center justify-center ">
      <h1 className=" text-4xl font-bold ">This is Register Page</h1>
      <div className=" w-full ">
        <Register />
      </div>
    </div>
  );
};

export default page;
