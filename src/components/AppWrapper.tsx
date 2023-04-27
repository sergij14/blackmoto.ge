import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "../store";
import { auth, db } from "../api/api";
import { Item, ItemWithId } from "../types";
import { createCollection, saveUser } from "../api/dbMethods";
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

    const q = query(createCollection<ItemWithId>("motos"));
    const unsubItemsDbState = onSnapshot(q, (querySnapshot) => {
      const data: ItemWithId[] = [];
      querySnapshot.forEach((doc) => data.push(doc.data()));
      setItems(data);
    });

    return () => {
      unsubAuthState();
      unsubItemsDbState();
    };
  }, []);
  return (
    <div className="px-8 max-w-screen-xl mx-auto">
      <header className="flex flex-col gap-4 items-center py-8 md:flex-row md:justify-between">
        <h2 className="text-3xl md:text-4xl font-black">
          <a href="/">#Moto Rent</a>
        </h2>
        <nav className="flex gap-2 flex-col sm:flex-row flex-wrap justify-center">
          <button className="nav-btn">WhatsApp: +7(977)404-64-84</button>
        </nav>
      </header>
      <Outlet />
      <footer className="bg-gray-900 bg-opacity-20 mt-14 rounded-md p-10 text-center">
        &copy; {new Date().getFullYear()}, All rights reserved
      </footer>
    </div>
  );
};

export default AppWrapper;
