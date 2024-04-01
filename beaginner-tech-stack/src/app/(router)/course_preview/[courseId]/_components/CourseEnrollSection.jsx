import React from "react";
import { Button } from "@/components/ui/button";

const CourseEnrollSection = () => {
  const membership = true;
  return (
    <div className=" p-3 text-center rounded-[10px] bg-[blue] px-5 flex flex-col gap-3">
      {/* user has membership and already login  */}

      <h2 className="text-white text-[22px] font-bold  ">
        Enroll to the course
      </h2>
      {membership ? (
        <div className="px-5 flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll now to Start Learn to build
          </h2>
          <Button className="bg-white hover:bg-white hover:text-primary text-[blue] rounded-[7px]">
            Enroll now
          </Button>
        </div>
      ) : (
        <div className="px-5 flex flex-col gap-3">
          <h2 className="text-white font-light">
            Buy Monthly Membership and get access to All courses
          </h2>
          <Button className="bg-white hover:bg-white hover:text-primary text-[blue] rounded-[7px]">
            Buy Membership
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;