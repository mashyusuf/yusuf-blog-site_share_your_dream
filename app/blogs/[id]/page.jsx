"use client";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function blogPage({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const resolvedParams = await params;
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(resolvedParams.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
          <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto"
          /></Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="icon" />{" "}
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img}
            width={60}
            height={60}
            alt="img"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={1280}
          alt="image"
          className="border-4 border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Begin your blogging journey by understanding your passions and
          identifying the purpose of your blog. Define clear objectives that
          align with your interests and resonate with your target audience.
        </p>
        <h3 className="my-5 text[18px] font-semibold">
          Step 2: Research and Planning
        </h3>
        <p className="my-3">
          Dive into topic research to understand trends and audience
          preferences. Plan a content strategy and outline engaging blog topics.
        </p>
        <h3 className="my-5 text[18px] font-semibold">
          Step 3: Crafting Quality Content
        </h3>
        <p className="my-3">
          Write compelling articles with clear structures, strong headlines, and
          valuable information. Ensure your tone reflects your brands
          personality.
        </p>
        <h3 className="my-5 text[18px] font-semibold">
          Step 4: Publishing and Promotion
        </h3>
        <p className="my-3">
          Publish your blog posts with attention to formatting, images, and SEO.
          Share them across social platforms to reach a wider audience.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Blogging is a rewarding journey that allows you to share your voice,
          connect with others, and make an impact. By following these steps and
          staying consistent, you can build a blog that not only reflects your
          passions but also provides value to your audience. Keep learning,
          experimenting, and growing as a blogger!
        </p>
        <div className="my-24">
            <p className="text-black font-semibold my-4">Share This Blog In Soical Media Gooooooooooooo!</p>
            <div className="flex">
                <Image src={assets.facebook_icon} width={50} alt="icon" />
                <Image src={assets.twitter_icon} width={50} alt="icon" />
                <Image src={assets.googleplus_icon} width={50} alt="icon" />
            </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
