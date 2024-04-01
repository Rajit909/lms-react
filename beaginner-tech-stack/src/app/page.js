'use client'
import { UserButton, useUser } from "@clerk/nextjs";
import Courses from "./(router)/courses/page";
import {useRouter} from "next/navigation";
import {useEffect} from "react";



export default function Home() {
  const router = useRouter();
  const user = useUser();

  useEffect(()=>{
    if(user){
      router.push('/dashboard')
    }else{
      router.push('/courses')
    }
  },[user])

  return (
    <>    
    <div>
      <main> 
      <UserButton afterSignOutUrl="/sign-in" />
        <Courses/>
      </main>
    </div>
    </>
  );
  }