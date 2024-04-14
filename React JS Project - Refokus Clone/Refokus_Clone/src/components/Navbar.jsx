import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex justify-between items-center border-b border-b-zinc-700">
      <div className="flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus_logo"
        />

        <div className="flex gap-12 ml-24">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-7 bg-zinc-700" key={index}></span>
            ) : (
              <a
                href="#"
                key={index}
                className="font-regular text-sm flex items-center gap-1"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 .25em #00FF19" }}
                    className="inlne-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button></Button>
    </div>
  );
};

export default Navbar;
