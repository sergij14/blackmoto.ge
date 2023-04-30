import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Item, itemFormSchema, ItemWithId } from "../../types";
import FormField from "./FormField";
import { getItem, saveItem, updateItem } from "../../api/dbMethods";
import { useNavigate } from "react-router-dom";
import ItemCmp from "../ItemCmp";

const formFields: { [key: string]: { label: string; type?: string } } = {
  title: {
    label: "Title",
  },
  img: {
    label: "Image",
  },
  price: {
    type: "textarea",
    label: "Prices",
  },
  tax: {
    label: "Tax",
  },
  engine: {
    label: "Engine",
  },
};

export default function ItemForm({ itemId }: { itemId?: string }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty },
  } = useForm<Item>({
    resolver: yupResolver(itemFormSchema),
    defaultValues: async () =>
      (await getItem({ col: "motos", key: itemId! })) as Item,
  });

  const itemToEdit = getValues() as ItemWithId;

  const onSubmit = async (data: Item) => {
    if (isDirty) {
      if (itemId) {
        await updateItem<Item>({ col: "motos", data, key: itemId });
        navigate("/");
      } else {
        await saveItem<Item>({ col: "motos", data });
        navigate("/");
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 flex-col w-full md:w-7/12"
      >
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
        <button
          className="mt-8 hero-btn self-start disabled:opacity-70 disabled:pointer-events-none"
          disabled={!isDirty}
          type="submit"
        >
          {itemId ? "Edit" : "Add"}
        </button>
      </form>
      {itemId && (
        <div className="w-full md:w-5/12 pt-8 md:pt-0">
          <ItemCmp {...itemToEdit} clickable={false} />
        </div>
      )}
    </div>
  );
}
