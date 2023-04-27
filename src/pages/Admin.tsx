import React from "react";
import { useStore } from "../store";
import ItemForm from "../components/ItemForm/ItemForm";

const Admin = () => {
  const { user } = useStore();

  return (
    <>
      {user && (
        <div>
          <h4 className="text-3xl font-black mb-4">Add new moto</h4>

          <ItemForm />
        </div>
      )}
    </>
  );
};

export default Admin;
