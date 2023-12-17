import React from "react";

const Props = ({ btn, color = "bg-zinc-600" }) => {
  return (
    <div>
      <button
        className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2`}
      >
        {btn}
      </button>
    </div>
  );
};

export default Props;
