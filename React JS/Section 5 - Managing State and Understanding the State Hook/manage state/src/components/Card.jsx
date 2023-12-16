import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae rerum",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1627313433073-a98d074772e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dialy Objects",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae rerum",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1511022542517-3d4a8183bd8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae rerum",
      inStock: false,
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-60 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt="card-image"
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold text-2xl">{item.name}</h2>
            <p className="text-md mt-5">{item.desc}</p>
            <button
              className={`px-4 py-2 ${
                item.inStock ? "bg-sky-600" : "bg-red-600"
              } text-xs rounded text-zinc-100 mt-3`}
            >
              {item.inStock ? "InStock" : "Out Of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
