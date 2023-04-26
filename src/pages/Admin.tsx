import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "../store";
import { auth } from "../api/api";
import { saveUser } from "../api/dbMethods";
import { userSignIn, userSignOut } from "../api/authMethods";
import ItemForm from "../components/ItemForm/ItemForm";

const Admin = () => {
  const { user, setUser } = useStore();

  useEffect(() => {
    const unsubAuthState = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        saveUser(user);
      } else {
        setUser(undefined);
      }
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
