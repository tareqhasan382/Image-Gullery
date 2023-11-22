"use client";
import { storeUserInfo } from "@/utils/auth";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    //console.log(data);
    const response = await axios.post(
      "https://image-gullery.vercel.app/api/v1/login",
      data
    );
    if (response?.data?.data?.accessToken) {
      window.alert("User loggedin successfully");
      // localStorage.setItem("accessToken", response?.data?.data?.accessToken);
      storeUserInfo(response?.data?.data?.accessToken);
      // storeUserInfo({ token: response?.data?.data?.accessToken });
      router.push("/");
    } else {
      setError(response?.data?.message);
      // console.log(response.data.message);
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8 mb-14 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center  text-3xl font-bold font-sans leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email")}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                {...register("password")}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 "
            >
              Sign in
            </button>
            {error && <p className=" text-red-500 ">{error} </p>}
          </div>
        </form>

        <p className="my-3 text-center text-sm text-gray-500">
          Not a member ?
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </Link>
        </p>

        {/* <p className=" flex flex-row items-center justify-center ">
          <hr className="border-t border-black text-center flex items-center justify-center w-1/2 py-2  " />
          <span className="  ">OR</span>
          <hr className="border-t border-black text-center flex items-center justify-center w-1/2 py-2  " />
        </p> */}
        <div className="flex flex-row items-center justify-center mb-3 ">
          <div className="flex-1 border-t border-black"></div>
          <div className="flex items-center">
            <div className=" w-10 h-10 border rounded-full border-black flex items-center justify-center">
              <span className="font-bold text-lg">OR</span>
            </div>
          </div>
          <div className="flex-1 border-t border-black"></div>
        </div>
        {/*====================================== social icon focus-visible:outline-indigo-600============================= */}
        <div>
          <div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-5 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              <Image
                src="/images/google.png"
                width={60}
                height={60}
                alt="logo"
                className=" w-[30px] h-[30px] object-contain "
              />
              Google
            </button>
            {error && <p className=" text-red-500 ">{error} </p>}
          </div>
          <div className=" pt-3 ">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-5 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              <Image
                src="/images/github.png"
                width={60}
                height={60}
                alt="logo"
                className=" w-[30px] h-[30px] object-contain "
              />
              GitHub
            </button>
            {error && <p className=" text-red-500 ">{error} </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
