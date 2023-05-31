import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm/ItemForm";
import { getItem } from "../api/dbMethods";
import { ItemWithId } from "../types";

const AdminEdit = () => {
  const { id } = useParams();
  const [itemToEdit, setItemToEdit] = useState<ItemWithId>();
  const navigate = useNavigate();

  const getItemToEdit = async (key: string) => {
    const item = await getItem<ItemWithId>({ col: "motos", key });
    if (item) {
      setItemToEdit(item);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (id) {
      getItemToEdit(id);
    }
  }, [id]);

  return (
    <div>
      <h4 className="section-title">Edit Moto</h4>
      {itemToEdit && <ItemForm itemToEdit={itemToEdit} />}
    </div>
  );
};

export default AdminEdit;
