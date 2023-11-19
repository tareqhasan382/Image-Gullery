"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log("data:", data.data);
  return (
    <div className=" w-full">
      <h1 className=" text-center text-3xl font-bold ">Photo Gullery</h1>
      <div className="flex flex-wrap items-center justify-center py-10 gap-5">
        {data?.data.map((item) => (
          <div key={item._id}>
            <div>
              <Image
                src={item.image}
                alt="Image 1"
                height={64}
                width={64}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gullery;
//
