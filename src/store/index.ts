import { User } from "firebase/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      user: undefined,
      setUser(user) {
        set(() => ({ user }));
      },
    }),
    {
      name: "moto-rent-storage",
    }
  )
);
