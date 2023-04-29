import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "../store";
import { auth } from "../api/api";
import { ItemWithId } from "../types";
import { createCollection, saveUser } from "../api/dbMethods";
import { onSnapshot, query } from "firebase/firestore";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { userSignIn, userSignOut } from "../api/authMethods";

const AppWrapper = () => {
  const { setUser, setItems, user } = useStore();

  const navigate = useNavigate();
  const { pathname } = useLocation();

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
      <header className="flex flex-col gap-4 items-center py-8 md:flex-row md:justify-between">
        <h2 className="text-3xl md:text-4xl font-black">
          <Link to="/">#Moto Rent</Link>
        </h2>
        <nav className="flex gap-2 flex-col sm:flex-row flex-wrap justify-center">
          <button className="nav-btn">WhatsApp: +7(977)404-64-84</button>
        </nav>
      </header>
      {pathname.slice(1) === "admin" && (
        <>
          {user ? (
            <div className="flex flex-col gap-4 items-center pb-8 md:flex-row md:justify-between">
              <div className="flex gap-2 items-center">
                {user.photoURL && (
                  <img src={user.photoURL} className="w-8 rounded-full" />
                )}
                {user.email}
              </div>
              <button className="nav-btn" onClick={() => userSignOut(navigate)}>
                Sign Out
              </button>
            </div>
          ) : (
            <button className="nav-btn" onClick={userSignIn}>
              Sign In
            </button>
          )}
        </>
      )}
      <Outlet />
      <footer className="bg-gray-900 bg-opacity-20 mt-14 mb-8 rounded-md p-10 text-center">
        &copy; {new Date().getFullYear()}, All rights reserved
      </footer>
    </div>
  );
};

export default AppWrapper;
