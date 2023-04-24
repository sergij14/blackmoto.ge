import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "./api/api";
import { userSignIn, userSignOut } from "./api/authMethods";
import { saveUser } from "./api/dbMethods";
import { useStore } from "./store";
import "./styles/index.css";

const App = () => {
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

    return unsubAuthState;
  }, []);

  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center gap-2 justify-center py-12">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-black">
          <a href="/">#Moto Rent</a>
        </h2>
        <img className="max-w-5xl" alt="" src="/rent-moto/assets/hero.svg" />

        {user ? (
          <>
            {user?.email}
            <button onClick={userSignOut}>sign out</button>
          </>
        ) : (
          <button onClick={userSignIn}>sign in</button>
        )}
      </div>
    </div>
  );
};

export default App;
