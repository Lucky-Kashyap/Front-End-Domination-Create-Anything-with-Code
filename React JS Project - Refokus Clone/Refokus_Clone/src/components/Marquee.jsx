import React from "react";

const Marquee = ({ imagesUrls }) => {
  return (
    <div className="w-full flex py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imagesUrls.map((url, index) => (
        <img
          src={url}
          key={index}
          alt="marquee"
          className="flex-shrink-0 w-[7vw]"
        />
      ))}
      {imagesUrls.map((url, index) => (
        <img
          src={url}
          key={index}
          alt="marquee"
          className="flex-shrink-0 w-[7vw]"
        />
      ))}
    </div>
  );
};

export default Marquee;
