import React, { useState } from "react";

const Form = () => {
  const [username, setName] = useState({ name: "", age: "" });
  // const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, age);
    console.log(username);
  };

  return (
    <div>
      <h3>{username.name}</h3>
      <h5>{username.age}</h5>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName({ ...username, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => setName({ ...username, age: e.target.value })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
