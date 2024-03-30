import React, { useEffect, useState } from 'react'
import {MdOutlineLightMode, MdDarkMode} from "react-icons/md"



const Theme = () => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }



  return (
    <div className='min-h-screen w-full bg-[#f5f5f5] dark:bg-[#343b3e]'>

      <div
        className='z-[100] fixed left-[0] bottom-[5%] bg-zinc-500 rounded-r-full p-1 border-top-right-radius:50% border-bottom-right-radius:50%; '
      >
        {" "}
        <div
          className='text-3xl font-bold bg-zinc-200 dark:bg-gray-900 p-2 rounded-full cursor-pointer dark:text-white text-black ' onClick={switchTheme}
        >
          {theme !== "dark" ? <MdOutlineLightMode/> : <MdDarkMode/>}
        </div>
        {" "}
      </div>
</div>
  )
}

export default Theme
