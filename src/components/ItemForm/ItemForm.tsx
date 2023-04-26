import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Item, itemFormSchema, ItemWithId } from "../../types";
import FormField from "./FormField";
import { saveItem } from "../../api/dbMethods";

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

export default function ItemForm({ itemToEdit }: { itemToEdit?: ItemWithId }) {
  const { engine, id, img, price, tax, title } = itemToEdit ?? {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>({
    resolver: yupResolver(itemFormSchema),
    defaultValues: itemToEdit ? { img, price, tax, title, engine } : undefined,
  });
  const onSubmit = (data: Item) => saveItem(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(formFields).map((fieldName, idx) => {
        const { label, type } = formFields[fieldName];

        return (
          <FormField
            key={`${fieldName}_${idx}`}
            label={label}
            type={type}
            fieldName={fieldName as keyof Item}
            register={register}
            errors={errors}
          />
        );
      })}
      <button type="submit">submit</button>
    </form>
  );
}
