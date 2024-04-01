import React from "react";
// import { Menu } from 'lucide-react';
import { Home } from "lucide-react";
import { BookOpen } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
   return (
    <>
      <nav className="w-full p-4 flex justify-around items-center bg-white border-b-1 border-gray-100 h-[70px] relative z-80">
        
        <a href="/">
          <h1 className="text-xl font-bold">Beaginner teck stack</h1>
        </a>
        <div className=" inline-flex justify-center ">
        

          <a href="/">
            <button className=" text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              <Home className="mr-2"/>
              <span className="hover:text-gray-500">Home</span>
         
            </button>
          </a>
          <a href="/">
            <button className=" text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              <BookOpen className="mr-2"/>
             <span className="hover:text-gray-500"> All Courses</span>
            </button>
          </a>
          
          <a href="/sign-in">
            <button className=" bg-white hover:bg-slate-700 hover:text-white text-black border border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              Get started
            </button>
          </a>
      <UserButton afterSignOutUrl="/sign-in" />

        </div>
        {/* for mobile */}
        {/* <div className="hidden cursor-pointer " >
              <Menu /> */}

        {/* </div> */}
      </nav>
    </>
  );
};

export default NavBar;