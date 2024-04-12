import React from "react";
import { IoIosReturnRight } from "react-icons/io";
const Button = () => {
  return (
    <div className="min-w-40 px-4 py-2 cursor-pointer bg-zinc-100 flex justify-between items-center border-b-2 divide-solid border-b-zinc-700 text-black rounded-full">
      <span className="text-sm font-medium">Get Started</span>
      <IoIosReturnRight></IoIosReturnRight>
    </div>
  );
};

export default Button;
