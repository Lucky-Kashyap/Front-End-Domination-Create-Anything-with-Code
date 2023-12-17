import React, { useState } from "react";

const Card = ({ song, handleFavourites, index }) => {
  const { songName, artistName, image, favourites } = song;

  return (
    <div className="w-52">
      <div className="w-52  flex mx-2 my-2">
        <img className="w-16 h-full object-cover rounded" src={image} alt="" />

        <div className="w-full mx-10">
          <h3 className="text-grey text-sm font-semibold">Song: {songName}</h3>
          <h5 className="text-grey text-xs my-2 font-semibold">
            Artist Name: {artistName}
          </h5>
        </div>
      </div>
      <button
        onClick={() => handleFavourites(index)}
        className={`px-3 py-3 ${
          favourites ? "bg-sky-900" : "bg-orange-600"
        } font-semibold text-xs mx-4 rounded-md text-white`}
      >
        {favourites ? "Add To favourites" : "Remove From Favourites"}
      </button>
    </div>
  );
};

export default Card;
