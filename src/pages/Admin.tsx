import React from "react";
import { useStore } from "../store";
import ItemForm from "../components/ItemForm/ItemForm";

const Admin = () => {
  const { user } = useStore();

  return (
    <>
      {user && (
        <div>
          <ItemForm />
        </div>
      )}
    </>
  );
};

export default Admin;
