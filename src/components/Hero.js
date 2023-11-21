import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="  w-full flex flex-col lg:flex-row justify-between  items-center mb-24 mt-10 gap-10 ">
      <div className=" lg:w-2/4  ">
        <h2 className=" lg:text-5xl  text-3xl font-bold font-sans pb-8 ">
          Discover the Best{" "}
          <span className=" text-green-500 ">Destinations</span>
        </h2>

        <p className=" text-xl text-justify ">
          Your dream vacation awaits, and we`re here to make it a reality.We are
          ready to provide you with the best trip of your life!
        </p>
        <button className=" px-4 py-3  text-white w-44 rounded-full bg-black hover:bg-gray-800 mt-5 items-center justify-center ">
          Destinations
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
