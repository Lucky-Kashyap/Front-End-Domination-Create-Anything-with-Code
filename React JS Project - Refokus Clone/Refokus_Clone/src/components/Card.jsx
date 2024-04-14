import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({
  width,
  start,
  para,
  hover = "none",
  heading,
  text,
  team = "",
}) => {
  return (
    <div
      className={`${width} hover:${hover} min-h-[30rem] flex flex-col justify-between bg-zinc-800 p-5 rounded-xl`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="font-extralight">{heading}</h3>
          <IoIosArrowRoundForward />
        </div>

        <h1 className="text-3xl font-normal mt-5">{text}</h1>
      </div>

      <div className="w-full">
        {start && (
          <>
            <h1 className="text-8xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 border border-zinc-50 py-2 px-5 font-semibold">
              Contact Us
            </button>
          </>
        )}

        {para && <p className="text-sm text-zinc-500 font-medium">{team}</p>}
      </div>
    </div>
  );
};

export default Card;
