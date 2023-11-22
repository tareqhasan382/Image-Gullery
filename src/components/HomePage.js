"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
const HomePage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
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
        setImages(result?.data.slice(0, 6));
        // console.log(result?.data); // (data.slice(0, 6))
      } catch (error) {
        console.log(error);
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
  //===========================================================

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  // flex items-center justify-center
  console.log(images);
  return (
    <>
      {loading ? (
        <div className=" -top-0 text-center  ">
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
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {images?.map((image, index) => (
            <div key={index} className="relative h-96 bg-red-300">
              <Image
                height={400}
                width={400}
                src={image?.image}
                alt={`Image ${index + 1}`}
                className="w-full h-96 object-cover cursor-pointer rounded "
                onClick={() => openImage(image?.image)}
              />
            </div>
          ))}

          {selectedImage && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-black opacity-75"
                onClick={closeImage}
              ></div>
              <div className="relative z-10">
                <Image
                  height={400}
                  width={400}
                  src={selectedImage}
                  alt="Selected Image"
                  className="max-w-[100%] object-cover max-h-full"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                  onClick={closeImage}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
