"use client";
import { getUserInfo } from "@/utils/auth";
import { authKey } from "@/utils/authKey";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FallingLines } from "react-loader-spinner";
//FallingLines
const ImageUpload = () => {
  const userinfo = getUserInfo(authKey);
  console.log("userinfo:", userinfo?.userId);
  const [isLoading, setLoading] = useState();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", data.image[0]); // assuming your input name is 'image'
    formData.append("upload_preset", "Reservation");

    // Make a request to Cloudinary using axios
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
      formData
    );
    const imageUrl = response.data.secure_url;
    //==================Save url to database
    const res = await axios.post(
      "https://image-gullery.vercel.app/api/v1/create-gullery",
      { image: imageUrl, userId: userinfo?.userId }
    );
    setLoading(false);
    if (res?.data?.success) {
      reset();
      window.alert("Image Upload Successfully");
    }
    console.log("result:", res.data.success);
  };
  return (
    <div className=" relative items-center justify-start flex flex-row bg-white w-full p-8  -mx-3 mb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full">
          <label
            className="block tracking-wide text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            disabled={isLoading}
            {...register("name", { required: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="your name"
          />
          <label
            className="block tracking-wide text-gray-700 mb-2"
            htmlFor="imageSrc"
          >
            Upload Image
          </label>
          <input
            disabled={isLoading}
            {...register("image", { required: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="imageSrc"
            type="file"
            placeholder="image"
          />
          <p className=" text-red-500 text-xs italic ">
            {/* {errors.imageSrc?.message} */}
          </p>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className={`${
            isLoading ? "opacity-30 " : ""
          }px-3 py-2 bg-black hover:bg-gray-800 text-white rounded text-xl font-bold `}
        >
          Submit
        </button>
      </form>
      {isLoading && (
        <div className=" z-10 absolute items-center justify-center px-10 h-20 w-auto ">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

//  formData.append("file", image);
//  formData.append("upload_preset", "Reservation");
// const uploadResponse = await fetch(
//   "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
//   {
//     method: "POST",
//     body: formData,
//   }
// );
// const uploadedImageData = await uploadResponse.json();
// const imageUrl = uploadedImageData.secure_url;
//  setImage(imageUrl);
// console.log("imageUrl:", imageUrl);
