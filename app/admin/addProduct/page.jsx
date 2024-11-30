"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/public/profile_icon.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image); // Use the correct image state

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error submitting blog");
    }
  };

  return (
    <form onSubmit={onSubmitHandle} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload thumbnail</p>
      <label htmlFor="image">
        <Image
          src={image ? URL.createObjectURL(image) : assets?.upload_area}
          width={140}
          height={140}
          alt="uploadAreaImage"
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />
      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        type="text"
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        placeholder="Type Here"
      />
      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        placeholder="Text Here"
        rows={6}
      />
      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        ADD BLOG
      </button>
    </form>
  );
}
