import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../api/dbMethods";
import ItemForm from "../components/ItemForm/ItemForm";
import { ItemWithId } from "../types";

const AdminEdit = () => {
  const { id } = useParams();

  const [itemToEdit, setItemToEdit] = useState<ItemWithId>();

  const getItemToEdit = async (itemId: string) => {
    const item = await getItem("motos", itemId);
    setItemToEdit(item as any);
  };

  useEffect(() => {
    if (id) {
      getItemToEdit(id);
    }
  }, [id]);

  return (
    <div>
      <ItemForm itemToEdit={itemToEdit} />
    </div>
  );
};

export default AdminEdit;
