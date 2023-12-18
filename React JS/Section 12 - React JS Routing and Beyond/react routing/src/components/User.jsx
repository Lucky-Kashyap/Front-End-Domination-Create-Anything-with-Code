import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
    // console.log("hey");
  };
  return (
    <div>
      <h3>User</h3>
      <p className="mb-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, tenetur
        dolorum? Tenetur odio dolorum dolore voluptatum, molestias repellat
        facere, fugit explicabo veritatis molestiae blanditiis in, cupiditate
        eaque neque dolorem culpa?
      </p>

      <button
        onClick={back}
        className="px-3 py-1 bg-sky-500 text-sm text-white rounded-md"
      >
        Explore More
      </button>
    </div>
  );
};

export default User;
