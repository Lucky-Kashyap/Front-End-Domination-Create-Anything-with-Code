import React from "react";

const Song = () => {
  const data = [
    {
      name: "Mahiya VE",
      desc: "The name of song",
    },
    {
      name: "Junooniyat",
      desc: "The name of Jununiyat moviesong",
    },
  ];

  const handleClick = () => {
    console.log("mouse over event");
  };
  return (
    <div className="w-full h-screen bg-zinc-400 flex justify-center flex-col gap-5 items-center">
      {data.map((item, index) => (
        <div key={index} className="w-60 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="text-sm mt-2">{item.desc}</p>
          <button
            className="px-2 py-1 bg-blue-300 text-xs font-semibold text-zinc-100 rounded mt-4"
            onClick={() => console.log("download song")}
            onMouseOver={handleClick}
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Song;
