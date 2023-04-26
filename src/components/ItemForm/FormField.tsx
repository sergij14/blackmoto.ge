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

const FormField = ({ register, errors, fieldName, type }: PropTypes) => (
  <>
    {type === "textarea" ? (
      <textarea {...register(fieldName)}></textarea>
    ) : (
      <input {...register(fieldName)} />
    )}
    <p>{errors[fieldName]?.message}</p>
  </>
);

export default FormField;
