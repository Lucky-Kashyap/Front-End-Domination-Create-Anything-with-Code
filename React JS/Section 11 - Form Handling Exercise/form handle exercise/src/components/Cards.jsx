import React from "react";
import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full max-h-96 overflow-auto  p-4 flex gap-4 justify-center flex-wrap">
      {users.map((item, index) => (
        <Card
          key={index}
          handleRemove={handleRemove}
          index={index}
          users={item}
        />
      ))}
    </div>
  );
};

export default Cards;
