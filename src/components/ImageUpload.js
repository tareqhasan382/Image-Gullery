"use client";

import axios from "axios";
// import { jwtDecode } from "jwt-decode";

import { useState } from "react";

const ImageUpload = () => {
  //  console.log(decoded);
  const [image, setImage] = useState();
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      //setImage(e.target.files[0]);
      const image = e.target.files[0];
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "Reservation");
      const uploadResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const uploadedImageData = await uploadResponse.json();
      const imageUrl = uploadedImageData.secure_url;
      setImage(imageUrl);
      console.log("imageUrl:", imageUrl);
    }
  };
  console.log("Image", image);
  //=======================
  const handleSubmit = async () => {
    // let userInfo = localStorage.getItem("accessToken");
    // const { userId } = jwtDecode(userInfo);

    try {
      const response = await axios.post(
        "https://image-gullery.vercel.app/api/v1/api/v1/create-gullery",
        { image: image }
      );
      console.log("response:", response);
      if (response) {
        alert("upload successful!");
      }
    } catch (error) {
      console.error(error);
      alert("upload failed. Please check your credentials.");
    }
  };
  // console.log("data:", image, userId);
  return (
    <div className=" items-center justify-start flex flex-row bg-white w-full p-8  -mx-3 mb-6">
      <form>
        <div className=" w-full">
          <label
            className="block tracking-wide text-gray-700 text-xl font-bold mb-2"
            htmlFor="imageSrc"
          >
            Upload Image
          </label>
          <input
            required
            onChange={handleImageChange}
            // {...register("imageSrc")}
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
          onClick={handleSubmit}
          className=" px-3 py-2 bg-slate-800 text-white rounded text-xl font-bold "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
