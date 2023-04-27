import React from "react";
import { useStore } from "../store";
import { userSignIn, userSignOut } from "../api/authMethods";
import ItemForm from "../components/ItemForm/ItemForm";
import { Link } from "react-router-dom";

const Admin = () => {
  const { user, items } = useStore();

  return (
    <>
      {user ? (
        <>
          {user?.email}
          <button onClick={userSignOut}>sign out</button>

          <div>
            {items.map(({ title, engine, price, id }, idx) => (
              <div key={`${id} + ${idx}`}>
                <p style={{ color: "red" }}>
                  <Link to={id}>{title}</Link>
                </p>
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
