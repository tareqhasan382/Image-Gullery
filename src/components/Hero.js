import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="  w-full flex flex-col lg:flex-row justify-between  items-center mb-24 mt-10 gap-10 ">
      <div className=" lg:w-2/4  ">
        <h2 className=" lg:text-5xl  text-3xl font-bold font-sans pb-8 ">
          Unlock Precious the Best
          <span className=" text-green-500 "> Memories</span>
        </h2>

        <p className=" text-xl text-justify ">
          Unlock Precious Memories Safely Store and Cherish Your Photos in a
          Secure Gallery Exclusively Yours with Unique UserID Access! 📸✨
          #MemoriesMatter #SecureGallery #PhotoStorage!
        </p>
        <button className=" px-4 py-3  text-white w-44 rounded-full bg-black hover:bg-gray-800 mt-5 items-center justify-center ">
          Memories
        </button>
      </div>
      <div className=" lg:pl-8 w-full lg:w-2/4 items-center  ">
        <Image
          src="https://res.cloudinary.com/dsybkyula/image/upload/v1700516994/Reservation/flfrjxprhzdjzcxvikox.jpg"
          width={400}
          height={400}
          alt="img"
          className=" w-full h-full object-cover rounded-md  "
        />
      </div>
    </div>
  );
};

export default Hero;
