import React from "react";
import { useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm/ItemForm";

const AdminEdit = () => {
  const { id } = useParams();

  return (
    <div>
      <h4 className="section-title">Edit Moto</h4>
      <ItemForm itemId={id} />
    </div>
  );
};

export default AdminEdit;
