import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "../store";
import { auth, db } from "../api/api";
import { Item } from "../types";
import { saveUser } from "../api/dbMethods";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Outlet } from "react-router-dom";

const AppWrapper = () => {
  const { setUser, setItems } = useStore();

  useEffect(() => {
    const unsubAuthState = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        saveUser(user);
      } else {
        setUser(undefined);
      }
    });

    const q = query(collection(db, "motos"));
    const unsubItemsDbState = onSnapshot(q, (querySnapshot) => {
      const data: Item[] = [];
      querySnapshot.forEach((doc) => data.push(doc.data() as Item));
      setItems(data);
    });

    return () => {
      unsubAuthState();
      unsubItemsDbState();
    };
  }, []);
  return <Outlet />;
};

export default AppWrapper;
