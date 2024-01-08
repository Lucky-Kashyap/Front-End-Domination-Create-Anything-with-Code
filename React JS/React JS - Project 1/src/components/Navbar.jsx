import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 border rounded border-blue-200 text-blue-200"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl font-semibold mb-3 w-[80%]">Category Filter</h1>
      <ul className="w-[80%]">
        <li className="mb-3 flex items-center">
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
          Cat 1
        </li>
        <li className="mb-3 flex items-center">
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
          Cat 2
        </li>
        <li className="mb-3 flex items-center">
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
          Cat 3
        </li>
        <li className="mb-3 flex items-center">
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
          Cat 4
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
