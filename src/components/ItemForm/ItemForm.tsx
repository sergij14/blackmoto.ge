import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Item, itemFormSchema, ItemWithId } from "../../types";
import FormField from "./FormField";
import { getItem, saveItem, updateItem } from "../../api/dbMethods";
import { db } from "../../api/api";
import { doc, DocumentData } from "firebase/firestore";
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
  const [itemToEdit, setItemToEdit] = useState<DocumentData>();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemId) {
      setItemToEdit(doc(db, "motos", itemId));
    }
  }, [itemId]);

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
      if (itemToEdit && itemId) {
        await updateItem({ col: "motos", data, key: itemId });
        navigate("/admin");
      } else {
        await saveItem({ col: "motos", data });
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
