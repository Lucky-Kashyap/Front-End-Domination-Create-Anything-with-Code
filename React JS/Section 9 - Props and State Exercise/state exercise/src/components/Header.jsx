import React from "react";

const Header = ({ favouritesCount }) => {
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-grey-600 text-xl font-semibold">
        Favourites Count:{" "}
      </h1>
      <button className="px-3 py-2 bg-orange-600 font-semibold text-sm mx-4 rounded-md text-white">
        Favourites Add :{" "}
        <span className="rounded bg-orange-900 text-sm">{favouritesCount}</span>
      </button>
    </div>
  );
};

export default Header;
