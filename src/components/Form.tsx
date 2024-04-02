import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z.string().min(3, {message: "shit"}),
  age: z.number({invalid_type_error: 'Age field is required'}).min(18)
})

type FormData = z.infer<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age", { valueAsNumber: true})}
        />
        {errors.age && (
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">Submit</button>
    </form>
  );
};
