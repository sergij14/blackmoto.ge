import { User } from "firebase/auth";
import { create } from "zustand";

interface State {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const useStore = create<State>()((set) => ({
  user: undefined,
  setUser(user) {
    set(() => ({ user }));
  },
}));
