import React from "react";
import Button from "./Button";

const Product = () => {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-6xl capitalize font-semibold">arqitel</h1>
        <div className="w-1/3">
          <p className="mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sed
            optio sapiente dignissimos voluptas? Obcaecati corporis ea error
            blanditiis dicta, facere veniam tempore nulla repellendus,
            aspernatur, quam natus quidem vero!
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
