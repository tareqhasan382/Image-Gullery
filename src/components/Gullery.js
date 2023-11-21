"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
const Gullery = () => {
  // gullery
  //   let userInfo = await localStorage.getItem("accessToken");
  //   const { userId } = jwtDecode(userInfo);
  //==================== http://localhost:8000/api/v1/gullery

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://image-gullery.vercel.app/api/v1/gullery"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the component mounts

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className=" w-full">
      <div className=" flex flex-col items-center ">
        <h1 className=" text-center lg:text-5xl text-3xl font-bold leading-tight text-green-500 font-serif ">
          Photos Gallery
        </h1>
        <hr className="border-t border-black text-center w-60 " />
      </div>
      {loading ? (
        <div className=" py-5 text-center flex items-center justify-center ">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center py-10 gap-5">
          {data?.data.map((item) => (
            <div key={item._id}>
              <div>
                <Image
                  src={item.image}
                  alt="Image 1"
                  height={400}
                  width={400}
                  className=" h-64 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gullery;
/*
<Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
*/
