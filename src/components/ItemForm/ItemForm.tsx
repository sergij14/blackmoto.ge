import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Item, itemFormSchema, ItemWithId } from "../../types";
import FormField from "./FormField";
import { deleteItem, saveItem, updateItem } from "../../api/dbMethods";
import { useNavigate } from "react-router-dom";
import ItemCmp from "../ItemCmp";
import { useLocalize } from "../../localization";

export default function ItemForm({ itemToEdit }: { itemToEdit?: ItemWithId }) {
  const navigate = useNavigate();
  const { t } = useLocalize();

  const formFields: { [key: string]: { label: string; type?: string } } =
    useMemo(
      () => ({
        title: {
          label: t("form.field.title"),
        },
        year: {
          label: t("form.field.year"),
        },
        img: {
          label: t("form.field.img"),
        },
        engine: {
          label: t("form.field.engine"),
        },
        power: {
          label: t("form.field.power"),
        },
        unit: {
          label: t("form.field.unit"),
        },
      }),
      [t]
    );

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Item>({
    resolver: yupResolver(itemFormSchema),
    defaultValues: itemToEdit,
  });

  const onSubmit = async (data: Item) => {
    if (isDirty) {
      if (itemToEdit) {
        await updateItem<Item>({ col: "motos", data, key: itemToEdit.id });
        navigate("/");
      } else {
        await saveItem<Item>({ col: "motos", data });
        navigate("/");
      }
    }
  };

  const onDelete = async () => {
    if (itemToEdit) {
      await deleteItem<Item>({ col: "motos", key: itemToEdit.id });
      navigate("/");
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
          className="mt-8 btn-white self-start disabled:opacity-70 disabled:pointer-events-none"
          disabled={!isDirty}
          type="submit"
        >
          {itemToEdit ? "Edit" : "Add"}
        </button>
      </form>
      {itemToEdit && (
        <div className="w-full md:w-5/12 pt-8 md:pt-0">
          <ItemCmp {...itemToEdit} clickable={false} />
          <button className="mt-4 btn" onClick={onDelete}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
