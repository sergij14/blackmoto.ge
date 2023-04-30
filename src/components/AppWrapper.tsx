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
    <div className="app-wrapper">
      <img className="app-bg" alt="" src="/rent-moto/assets/hero.svg" />
      <Header />
      <Outlet />
      <footer className="mt-auto pb-8">
        <div className="footer">
          &copy; {new Date().getFullYear()}, All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default AppWrapper;
