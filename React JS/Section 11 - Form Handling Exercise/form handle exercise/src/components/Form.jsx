import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ addFormData }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    addFormData(data);
    reset();
  };

  return (
    <div className="mt-10 flex gap-10 justify-center">
      <form
        action=""
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex gap-10"
      >
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          {...register("name")}
          name="name"
          type="name"
          placeholder="name"
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          {...register("email")}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          {...register("image_url")}
          type="text"
          name="image_url"
          placeholder="image url"
        />
        <input
          className="px-5 rounded-md py-1 bg-blue-500 text-white font-semibold"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
