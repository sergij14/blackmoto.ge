import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm/ItemForm";
import { ItemWithId } from "../types";
import { getItem } from "../api/dbMethods";
import Loader from "../components/Loader";

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
  
  return (
    <div>
      <h4 className="section-title">Edit moto - {itemToEdit?.title}</h4>

      <ItemForm itemId={id} />
    </div>
  );
};

export default AdminEdit;
