import { signInWithPopup, signOut } from "firebase/auth";
import { useStore } from "../store";
import { auth, provider } from "./api";

export const userSignIn = async () => {
  try {
    signInWithPopup(auth, provider);
  } catch (e) {
    console.log(e);
  }
};

export const userSignOut = async () => {
  try {
    signOut(auth);
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentUser = () => auth.currentUser;
export const isUserLoggedIn = () => {
  const user = auth.currentUser;
  if (user) {
    return true;
  }
  return false;
};
