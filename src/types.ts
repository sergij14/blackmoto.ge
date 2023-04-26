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

export type Item = yup.InferType<typeof itemFormSchema>;
export type ItemWithId = Item & { id: string };
