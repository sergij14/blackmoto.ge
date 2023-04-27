import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Item, itemFormSchema, ItemWithId } from "../../types";
import FormField from "./FormField";
import { getItem, saveItem, updateItem } from "../../api/dbMethods";
import { useNavigate } from "react-router-dom";

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

export default function ItemForm({ itemId }: { itemId?: string }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<Item>({
    resolver: yupResolver(itemFormSchema),
    defaultValues: async () =>
      (await getItem({ col: "motos", key: itemId! })) as Item,
  });

  const onSubmit = async (data: Item) => {
    if (isDirty) {
      if (itemId) {
        await updateItem<Item>({ col: "motos", data, key: itemId });
        navigate("/admin");
      } else {
        await saveItem<Item>({ col: "motos", data });
        reset(undefined);
      }
    }
  };

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
      <button disabled={!isDirty} type="submit">
        submit
      </button>
    </form>
  );
}
