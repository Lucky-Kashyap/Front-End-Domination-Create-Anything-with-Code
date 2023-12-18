import React, { useRef } from "react";

const Card = () => {
  // const ref = useRef(null);

  // console.log(ref);

  const name = useRef(null);

  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, password.current.value);
  };

  return (
    <div className="p-4">
      <h5>Card</h5>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="border-2 px-1 py-1 mx-2"
          ref={name}
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          className="border-2 px-1 py-1 mx-2"
          type="password"
          placeholder="password"
          autoComplete="off"
          ref={password}
        />
        <input
          className="px-3 py-1 bg-sky-600 rounded-sm text-white text-sm"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Card;
