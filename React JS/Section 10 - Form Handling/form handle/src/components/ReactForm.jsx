import React from "react";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const { register, handleSubmit } = useForm();

  // console.log(register());
  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          className="px-3 mt-2 border-2"
          {...register("name")}
          type="text"
          placeholder="name"
        />{" "}
        <br />
        <input
          className="px-3 mt-2 border-2"
          {...register("email")}
          type="email"
          placeholder="email"
        />{" "}
        <br />
        <input
          className="px-3 mt-2 border-2"
          {...register("age")}
          type="text"
          placeholder="name"
        />{" "}
        <br />
        <input
          className="px-3 mt-2 border-2"
          {...register("color")}
          type="color"
          placeholder="email"
        />{" "}
        <br />
        <input
          className="px-3 mt-2 border-2"
          {...register("password")}
          type="password"
          placeholder="name"
        />{" "}
        <br /> <br />
        <textarea
          className="px-3 mt-2 border-2"
          name="comment"
          {...register("comment")}
          placeholder="Write your feedback"
          cols="30"
          rows="10"
        ></textarea>{" "}
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactForm;
