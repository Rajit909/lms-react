'use client'
import { useUser } from "@clerk/nextjs";
import Courses from "./(router)/courses/page";
import {useRouter} from "next/navigation";
import {useEffect} from "react";




export default function Home() {
  const router = useRouter();
  const {user, isLoaded} = useUser();

  useEffect(()=>{
    if(user){
      router.push('/dashboard')
    }else{
      isLoaded&&router.push('/courses')
    }
  },[user, isLoaded, router])

  return (
    <>    
    <div>
      <main> 
      {/* <UserButton afterSignOutUrl="/sign-in" /> */}
        <Courses/>
      </main>
    </div>
    </>
  );
  }