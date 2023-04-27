import { signInWithPopup, signOut } from "firebase/auth";
import { NavigateFunction } from "react-router";
import { toast } from "react-toastify";
import { auth, provider } from "./api";

export const userSignIn = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err: any) {
    toast.error(err.message);
  }
};

export const userSignOut = async (navigate: NavigateFunction) => {
  try {
    await signOut(auth);
    navigate("/");
  } catch (err: any) {
    toast.error(err.message);
  }
};
