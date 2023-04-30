import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "../store";
import { auth } from "../api/api";
import { ItemWithId } from "../types";
import { createCollection, saveUser } from "../api/dbMethods";
import { onSnapshot, query } from "firebase/firestore";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

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
    <div className="relative px-8 max-w-screen-xl mx-auto">
      <img
        className="-z-10 absolute top-24 left-0 opacity-30 w-full h-full object-contain object-top"
        alt=""
        src="/rent-moto/assets/hero.svg"
      />
      <Header />
      <Outlet />
      <footer className="bg-gray-900 bg-opacity-20 mt-14 mb-8 rounded-md p-10 text-center">
        &copy; {new Date().getFullYear()}, All rights reserved
      </footer>
    </div>
  );
};

export default AppWrapper;
