import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "../store";
import { auth, db } from "../api/api";
import { Item, ItemWithId } from "../types";
import { saveUser } from "../api/dbMethods";
import { userSignIn, userSignOut } from "../api/authMethods";
import ItemForm from "../components/ItemForm/ItemForm";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

const Admin = () => {
  const { user, setUser, items, setItems } = useStore();

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

  return (
    <>
      {user ? (
        <>
          {user?.email}
          <button onClick={userSignOut}>sign out</button>

          <div>
            {(items as ItemWithId[]).map(
              ({ title, engine, price, id }, idx) => (
                <div key={id}>
                  <p style={{ color: "red" }}>
                    <Link to={id}>{title}</Link>
                  </p>
                  <p>{engine}</p>
                  <p>{price}</p>
                </div>
              )
            )}
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
