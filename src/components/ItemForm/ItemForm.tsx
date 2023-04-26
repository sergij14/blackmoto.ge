import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData, itemFormSchema } from "../../types";
import FormField from "./FormField";

const formFields: { [key: string]: { label: string; type?: string } } = {
  title: {
    label: "Title",
  },
  img: {
    label: "Image",
  },
  price: {
    type: "textarea",
    label: "Price",
  },
  tax: {
    label: "Price",
  },
  engine: {
    label: "engine",
  },
};

export default function ItemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(itemFormSchema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(formFields).map((fieldName) => {
        const { label, type } = formFields[fieldName];

        return (
          <FormField
            key={fieldName}
            label={label}
            type={type}
            fieldName={fieldName as keyof FormData}
            register={register}
            errors={errors}
          />
        );
      })}
      <button type="submit">submit</button>
    </form>
  );
}
