import { User } from "firebase/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ItemWithId } from "../types";

interface State {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  items: ItemWithId[];
  setItems: (items: ItemWithId[]) => void;
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
    }),
    {
      name: "moto-rent-storage",
    }
  )
);
