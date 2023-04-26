import { uuidv4 } from "@firebase/util";
import { User } from "firebase/auth";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { FormData } from "../types";
import { db } from "./api";

type FormDataWithID = FormData & { id: string };

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

export const saveItem = async (item: FormData) => {
  (item as FormDataWithID).id = uuidv4();

  const docRef = doc(db, "motos", (item as FormDataWithID).id);

  try {
    await setDoc(docRef, item);
  } catch (err: any) {
    toast.error(err.mesage);
  }
};

export const getItems = async (col: string) => {
  const data: DocumentData[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, col));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      data.push(docData);
    });

    return data;
  } catch (err: any) {
    toast.error(err.mesage);
  }
};
