'use client'
import React from "react";
import { Menu, BellDot, LayoutDashboard } from 'lucide-react';
import { Home } from "lucide-react";
import { BookOpen } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const NavBar = () => {
  const {user, isLoaded} = useUser();
    
   return (
    <>
      <nav className="w-full p-4 flex justify-around items-center bg-white border-b-1 border-gray-100 h-[70px] relative z-80">
        
        <Link href={"/"}>
          <h1 className="text-xl font-bold">Beaginner teck stack</h1>
        </Link>
        <div className=" inline-flex justify-center ">
            {
              isLoaded && user ? 
              <Link href={"/dashboard"}>
            <button className=" text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              <LayoutDashboard className="mr-2"/>
             <span className="hover:text-gray-500"> Dashboard</span>
            </button>
          </Link>
              :
              <Link href={"/"}>
              <button className=" text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
                <Home className="mr-2"/>
                <span className="hover:text-gray-500">Home</span>
              </button>
            </Link>
            }

          <Link href={"/courses"}>
            <button className=" text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              <BookOpen className="mr-2"/>
             <span className="hover:text-gray-500"> All Courses</span>
            </button>
          </Link>
          
        
            <BellDot className="text-gray-500 mt-2 mr-5 "/>

            {
              isLoaded && user ? 
              <div className="mt-1 ml-5 ">
              <UserButton afterSignOutUrl="/" />
          </div>: 

                <Link href={"/sign-in"}>
            <Button className=" bg-white hover:bg-[blue] hover:text-white text-black border border-black font-medium rounded-[7px] text-sm px-4 py-2 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95">
              Get started
            </Button>
          </Link>
            }
         

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