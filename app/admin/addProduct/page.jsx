"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [image, setImage] = useState(null);

  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
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
          type="text"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder="Tyep Here"
          id=""
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          type="text"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder="Text Here"
          rows={6}
          id=""
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select name="category" className="w-40 mt-4 px-4 py-3 border text-gray-500">
          <option value='Startup'>Startup</option>
          <option value='Technology'>Technology</option>
          <option value='Lifestyle'>Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">ADD BLOG</button>
      </form>
    </>
  );
}
