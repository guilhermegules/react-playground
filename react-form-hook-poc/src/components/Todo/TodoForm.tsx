import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";

import { useTodo } from "@hooks/useTodo";

const TodoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const { setTodos } = useTodo();

  const onSubmit = (data: FieldValues) => {
    setTodos((previousState) => [
      ...previousState,
      { text: data.todo, done: false, id: Math.random() * 1000 },
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("todo", { required: true })} />
      {errors.todo && <span>This field is required</span>}
      <button>Add task</button>
    </form>
  );
};

export default TodoForm;
