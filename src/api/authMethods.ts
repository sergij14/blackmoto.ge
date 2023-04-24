import { signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, provider } from "./api";

export const userSignIn = async () => {
  try {
    signInWithPopup(auth, provider);
  } catch (err: any) {
    toast.error(err.message);
  }
};

export const userSignOut = async () => {
  try {
    signOut(auth);
  } catch (err: any) {
    toast.error(err.message);
  }
};
