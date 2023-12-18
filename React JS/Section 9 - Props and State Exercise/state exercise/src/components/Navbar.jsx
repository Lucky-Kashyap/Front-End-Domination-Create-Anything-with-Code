import React from "react";

const Navbar = ({ songData }) => {
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3>Orange</h3>
      <div className="flex gap-3 p-2 px-4 bg-orange-600 text-white rounded-md text-sm">
        <h3>Favourites</h3>
        <h4>{songData.filter((item) => item.favourites).length}</h4>
      </div>
    </div>
  );
};

export default Navbar;
