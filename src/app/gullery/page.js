"use client";
import Gullery from "@/components/Gullery";
import ImageUpload from "@/components/ImageUpload";

const GulleryPage = () => {
  return (
    <div className=" mt-24 flex flex-col  items-center justify-center ">
      <div className=" pb-10 flex items-center justify-center ">
        <h1 className=" lg:text-5xl text-3xl font-bold  font-sans text-center leading-tight ">
          Welcome with{" "}
          <span className=" text-green-500 font-serif ">Photos Gallery</span>
        </h1>
      </div>

      <div>
        <ImageUpload />
      </div>
      <div className=" lg:px-48 md:px-20 w-full flex flex-wrap items-center justify-center ">
        <Gullery />
      </div>
    </div>
  );
};

export default GulleryPage;
