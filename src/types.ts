import * as yup from "yup";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export const itemFormSchema = yup
  .object({
    title: yup.string().required(),
    img: yup.string().required(),
    engine: yup.string().required(),
    power: yup.string().required(),
    unit: yup.string().required(),
    year: yup.string().required(),
  })
  .required();

export type Item = yup.InferType<typeof itemFormSchema>;
export type ItemWithId = Item & { id: string };

export type Lang = 'ru' | 'ge'