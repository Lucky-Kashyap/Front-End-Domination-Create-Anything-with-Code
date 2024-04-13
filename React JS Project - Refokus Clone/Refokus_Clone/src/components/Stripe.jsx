import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] flex justify-between items-center px-4 py-5 border-t border-b border-r border-zinc-600">
      <img src={val.url} alt="stripe" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
