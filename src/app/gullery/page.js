"use client";
import Gullery from "@/components/Gullery";
import ImageUpload from "@/components/ImageUpload";

const GulleryPage = () => {
  return (
    <div className=" mt-24 flex flex-col  items-center justify-center ">
      <div>
        <h1 className=" text-4xl font-bold ">This is Gullery Page</h1>
      </div>

      <div>
        <ImageUpload />
      </div>
      <div className=" w-full flex flex-wrap items-center justify-center ">
        <Gullery />
      </div>
    </div>
  );
};

export default GulleryPage;
