import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm/ItemForm";
import { ItemWithId } from "../types";
import { getItem } from "../api/dbMethods";

const AdminEdit = () => {
  const { id } = useParams();

  const [itemToEdit, setItemToEdit] = useState<ItemWithId>();
  const [dataAvailable, setDataAvailable] = useState(false);

  const getItemToEdit = async (itemId: string) => {
    const item = await getItem<ItemWithId>({ col: "motos", key: itemId });

    setDataAvailable(() => {
      setItemToEdit(item);
      return true;
    });
  };

  useEffect(() => {
    if (id) {
      getItemToEdit(id);
    }
  }, [id]);

  if (!dataAvailable) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <h4 className="section-title">Edit moto - {itemToEdit?.title}</h4>

      {itemToEdit ? <ItemForm itemId={id} /> : <Navigate to="/admin" />}
    </div>
  );
};

export default AdminEdit;
