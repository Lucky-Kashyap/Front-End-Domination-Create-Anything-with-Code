import React, { useState } from "react";

const Card = () => {
  const [data, setData] = useState(false);

  return (
    <div>
      <h2>{data.toString()}</h2>

      {/* print bahar jaao if val is false and print mat jao iv val is true */}

      <p>{data === false ? "BAHAR JAO" : "MAT JAO"}</p>

      <button
        // onClick={() => setData(!data)}
        onClick={() => setData(() => !data)}
        className="px-3 py-1 bg-sky-500 text-md rounded-full"
      >
        Change Data
      </button>
    </div>
  );
};

export default Card;
