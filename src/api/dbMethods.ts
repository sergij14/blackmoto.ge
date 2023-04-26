import { uuidv4 } from "@firebase/util";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Item, ItemWithId } from "../types";
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

export const saveItem = async ({ col, data }: { col: string; data: Item }) => {
  (data as ItemWithId).id = uuidv4();

  const docRef = doc(db, col, (data as ItemWithId).id);

  try {
    await setDoc(docRef, data);
  } catch (err: any) {
    toast.error(err.mesage);
  }
};

export const updateItem = async ({
  col,
  key,
  data,
}: {
  col: string;
  key: string;
  data: Item;
}) => {
  const docRef = doc(db, col, key);

  try {
    await updateDoc(docRef, { ...data });
  } catch (err: any) {
    toast.error(err.mesage);
  }
};

export const getItem = async ({ col, key }: { col: string; key: string }) => {
  try {
    const docRef = doc(db, col, key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (err: any) {
    toast.error(err.mesage);
  }
};
