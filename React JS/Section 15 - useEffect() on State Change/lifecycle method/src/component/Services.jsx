import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("This is normal data");
  const [second, setSecond] = useState("This is very Large Data");

  useEffect(() => {
    console.log("SErvices Run");

    return () => {
      console.log("SErvice Destroyed");
    };
  }, [second]);

  return (
    <div>
      <h1>Services</h1>
      <h3>{first}</h3>
      <h4>{second}</h4>
      <button
        onClick={() => setFirst("change first data")}
        className="px-3 py-1 rounded-sm text-white bg-sky-600 mt-10"
      >
        Change first data
      </button>
      <button
        onClick={() => setSecond("change second data")}
        className="px-3 py-1 mx-4 rounded-sm text-white bg-orange-600 mt-10"
      >
        Change second data
      </button>
    </div>
  );
};

export default Services;
