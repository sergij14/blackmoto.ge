import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useStore } from "../store";
import { auth } from "../api/api";
import { ItemWithId } from "../types";
import { createCollection, saveUser } from "../api/dbMethods";
import { onSnapshot, query } from "firebase/firestore";
import Header from "./Header";
import { useLocalize } from "../localization";
import Footer from "./Footer";

const AUTHED_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS as string).split(",");

const AppWrapper = () => {
  const { setUser, setItems, lang, headerHeight } = useStore();

  useEffect(() => {
    const unsubAuthState = onAuthStateChanged(auth, (user) => {
      const userEmail = user?.email;
      if (userEmail && !AUTHED_EMAILS.includes(userEmail)) {
        signOut(auth);
        toast.error("You have no access");
        return;
      }
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

  const font = lang === "ge" ? "font-ge" : "font-ru";
  const { t } = useLocalize();

  return (
    <div className={`app-wrapper ${font}`}>
      <Header />
      {/* <img className="app-bg" alt="" src="/assets/back.jpg" /> */}
      <div className="mt-8 container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppWrapper;
