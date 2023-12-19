import React, { useContext } from "react";
import UserDetail from "./UserDetail";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { users, setUser } = useContext(UserContext);

  // console.log(x);
  return (
    <div>
      {/* <UserDetail /> */}
      <h1 className="text-4xl">User List</h1>
      <div className="mt-10 flex flex-col">
        {users.map((item, index) => (
          <Link
            key={index}
            to={`/user/${item.id}`}
            className="p-3 my-2 bg-red-100"
          >
            {" "}
            User name : {item.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
