import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Item } from "../../types";

interface PropTypes {
  register: UseFormRegister<{
    title: string;
    img: string;
    engine: string;
    price: string;
    tax: string;
  }>;
  errors: FieldErrors<{
    img: string;
    title: string;
    engine: string;
    price: string;
    tax: string;
  }>;
  fieldName: keyof Item;
  label: string;
  type?: string;
}

const FormField = ({ register, errors, label, fieldName, type }: PropTypes) => (
  <>
    {/* <label htmlFor={fieldName} className="text-lg font-bold mt-1">
      {label}
    </label> */}
    {type === "textarea" ? (
      <textarea
        className="form-field min-h-[150px] max-h-[300px]"
        id={fieldName}
        placeholder={label + "..."}
        {...register(fieldName)}
      ></textarea>
    ) : (
      <input
        className="form-field"
        id={fieldName}
        placeholder={label + "..."}
        {...register(fieldName)}
      />
    )}
    <p className="text-red-400">{errors[fieldName]?.message}</p>
  </>
);

export default FormField;
