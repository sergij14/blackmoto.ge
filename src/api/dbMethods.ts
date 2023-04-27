import { uuidv4 } from "@firebase/util";
import { User } from "firebase/auth";
import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./api";

export const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

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

export const saveItem = async <T>({ col, data }: { col: string; data: T }) => {
  const id = uuidv4();

  const dataToSave = { ...data, id };
  const dbCol = createCollection<T>(col);
  const docRef = doc(dbCol, id);

  try {
    await setDoc(docRef, dataToSave);
  } catch (err: any) {
    toast.error(err.mesage);
  }
};

export const updateItem = async <T>({
  col,
  key,
  data,
}: {
  col: string;
  key: string;
  data: T;
}) => {
  const dbCol = createCollection<T>(col);
  const docRef = doc(dbCol, key);

  try {
    await updateDoc(docRef, data as any);
  } catch (err: any) {
    toast.error(err.mesage);
  }
};

export const getItem = async <T>({
  col,
  key,
}: {
  col: string;
  key: string;
}) => {
  try {
    const dbCol = createCollection<T>(col);
    const docRef = doc(dbCol, key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (err: any) {
    toast.error(err.mesage);
  }
};
