import React from "react";

const Card = ({ users, handleRemove, index }) => {
  const { name, email, image_url } = users;

  return (
    <div className="w-52 h-full bg-zinc-100 rounded-lg flex items-center p-2 flex-col">
      <div className="w-[4vw] h-[4vw] rounded-full bg-zinc-200">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src={image_url}
          alt=""
        />
      </div>
      <h1 className="mt-1 text-xl font-semibold leading-none text-center">
        {name}
      </h1>
      <h4 className="opacity-60 text-xs font-semibold"> {email}</h4>
      <p className="mt-1 text-center text-xs leading-1 tracking-tight font-semibold">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <button
        onClick={() => handleRemove(index)}
        className="px-3 py-1 bg-red-400 text-xs rounded-lg font-semibold text-white mt-4"
      >
        Remove it
      </button>
    </div>
  );
};

export default Card;
