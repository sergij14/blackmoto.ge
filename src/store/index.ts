import { User } from "firebase/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ItemWithId, Lang } from "../types";

interface State {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  items: ItemWithId[];
  setItems: (items: ItemWithId[]) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      user: undefined,
      setUser(user) {
        set(() => ({ user }));
      },
      items: [],
      setItems(items) {
        set(() => ({ items }));
      },
      lang: "ru",
      setLang(lang) {
        set(() => ({ lang: lang }));
      },
    }),
    {
      name: "moto-rent-storage",
    }
  )
);
