import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./api";

export const saveUser = async (user: User) => {
  const { uid, displayName, photoURL, email } = user;

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return;
  }

  try {
    await setDoc(docRef, { uid, displayName, photoURL, email });
  } catch (err: any) {
    toast.error(err.mesage);
  }
};
