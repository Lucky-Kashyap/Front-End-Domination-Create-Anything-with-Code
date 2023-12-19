import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  // console.log(props);

  const [users, setUser] = useState([
    {
      id: 0,
      username: "John Doe",
      city: "USA",
    },
    {
      id: 1,
      username: "Lucky",
      city: "Delhi",
    },
    {
      id: 2,
      username: "Harsh",
      city: "Bhopal",
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{ users, setUser }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default Context;
