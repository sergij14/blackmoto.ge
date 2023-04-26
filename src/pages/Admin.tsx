import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "../store";
import { auth } from "../api/api";
import { FormData } from "../types";
import { getItems, saveUser } from "../api/dbMethods";
import { userSignIn, userSignOut } from "../api/authMethods";
import ItemForm from "../components/ItemForm/ItemForm";

const Admin = () => {
  const { user, setUser } = useStore();
  const [items, setItems] = useState<FormData[]>([]);

  useEffect(() => {
    const unsubAuthState = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        saveUser(user);
      } else {
        setUser(undefined);
      }
    });

    getItems("motos").then((data) => {
      setItems(data as FormData[]);
    });

    return () => {
      unsubAuthState();
    };
  }, []);

  return (
    <>
      {user ? (
        <>
          {user?.email}
          <button onClick={userSignOut}>sign out</button>

          <div>
            {items.map(({ title, engine, price }) => (
              <div key={title}>
                <p>{title}</p>
                <p>{engine}</p>
                <p>{price}</p>
              </div>
            ))}
          </div>
          <div>
            <ItemForm />
          </div>
        </>
      ) : (
        <button onClick={userSignIn}>sign in</button>
      )}
    </>
  );
};

export default Admin;
