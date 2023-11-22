"use client";
import Gullery from "@/components/Gullery";
import ImageUpload from "@/components/ImageUpload";
import { isLoggedIn } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GulleryPage = () => {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, loading, userLoggedIn]);

  if (!loading) {
    <div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Loading .....
      </h1>
    </div>;
  }
  return (
    <>
      {isLoggedIn && (
        <div className=" mt-24 flex flex-col  items-center justify-center ">
          <div className=" pb-10 flex items-center justify-center ">
            <h1 className=" lg:text-5xl text-3xl font-bold  font-sans text-center leading-tight ">
              Welcome with{" "}
              <span className=" text-green-500 font-serif ">
                Photos Gallery
              </span>
            </h1>
          </div>
          <div>
            <p className="lg:px-48 md:px-20 w-full text-xl text-center px-3 ">
              Streamlined Image Access with Exclusive UserID Viewing - Elevate
              your privacy standards while effortlessly sharing images through
              our restricted UserID access system.
            </p>
          </div>
          <div>
            <ImageUpload />
          </div>
          <div className=" lg:px-48 md:px-20 w-full flex flex-wrap items-center justify-center ">
            <Gullery />
          </div>
        </div>
      )}
    </>
  );
};

export default GulleryPage;
