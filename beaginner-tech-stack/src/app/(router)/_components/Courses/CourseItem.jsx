import Link from "next/link";
import React from "react";
// import images from "./img.png";



function CourseItem({ name, description, images ,btn1, btn2, btn3, btn4}) {
  return (
    <Link
      href="/courseinfo"
      className=" dark:bg-zinc-700  dark:text-gray-50 text-gray-800 bg-white shadow-xl  rounded-xl m-2 p-2"
    >
      <div className="p-2">
        <img
          className="w-[100%] h-[150px] max-h-[380px] object-cover object-center p-1 rounded-2xl bg-transparent"
          src={images}
          alt={name}
        />
        <div className="">
          <h2 className="text-lg text-black dark:text-white font-semibold">{name}</h2>
          <p className="dark:bg-zinc-700 dark:text-[#7984A6] text-gray-500">{description}</p>
          <div className="flex flex-wrap w-[100%] ">
          <button className="dark:bg-[#91a2d7] hover:dark:bg-white hover:dark:text-gray-800 rounded pl-[8px] pr-[8px] dark:text-white-100 m-1 bg-gray-300 text-white text-sm">{btn1}</button>
          <button className="dark:bg-[#91a2d7] hover:dark:bg-white hover:dark:text-gray-800 rounded pl-[8px] pr-[8px] dark:text-white-100 m-1 bg-gray-300 text-white text-sm">{btn2}</button>
          <button className="dark:bg-[#91a2d7] hover:dark:bg-white hover:dark:text-gray-800 rounded pl-[8px] pr-[8px] dark:text-white-100 m-1 bg-gray-300 text-white text-sm">{btn3}</button>
          <button className="dark:bg-[#91a2d7] hover:dark:bg-white hover:dark:text-gray-800 rounded pl-[8px] pr-[8px] dark:text-white-100 m-1 bg-gray-300 text-white text-sm">{btn4}</button>
          </div>
        </div>
      </div>
    </Link> 
  );
}

export default CourseItem;
