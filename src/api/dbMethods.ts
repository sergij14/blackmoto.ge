import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./api";

export const saveUser = async (user: User) => {
  const { uid, displayName, photoURL, email } = user;

  try {
    await setDoc(doc(db, "users", uid), { uid, displayName, photoURL, email });
  } catch (err: any) {
    toast.error(err.mesage);
  }
};
