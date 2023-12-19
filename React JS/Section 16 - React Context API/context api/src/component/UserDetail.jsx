import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { users } = useContext(UserContext);

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  console.log(users[id]);

  const handleBack = () => {
    navigate("/user");
  };
  return (
    <div>
      <h1 className="text-red-200 text-4xl font-bold">{users[id].username}</h1>
      <h2 className="text-red-500 text-4xl font-bold">{users[id].city}</h2>
      <button
        onClick={handleBack}
        className="px-3 py-1 mt-10 bg-sky-600 text-sm text-white rounded-sm"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetail;
