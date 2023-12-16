import React from "react";

const Card = () => {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="w-60 absolute bg-zinc-100 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="amazon"
          />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold text-2xl">Amazon Basics.</h2>
          <p className="text-md mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae rerum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
