import * as yup from "yup";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export const itemFormSchema = yup
  .object({
    title: yup.string().required(),
    img: yup.string().required(),
    engine: yup.string().required(),
    price: yup.string().required(),
    tax: yup.string().required(),
  })
  .required();

export type FormData = yup.InferType<typeof itemFormSchema>;
