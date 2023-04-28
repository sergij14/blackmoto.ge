import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { ItemWithId } from "../types";

const Item = ({
  title,
  engine,
  price,
  id,
  img,
  tax,
  idx,
}: ItemWithId & { idx: number }) => {
  const { user } = useStore();

  return (
    <div className="item" key={`${id} + ${idx}`}>
      {user ? (
        <Link to={"admin/" + id}>
          <img className="rounded-md" src={img} alt={title} />
        </Link>
      ) : (
        <img className="rounded-md" src={img} alt={title} />
      )}
      <h4 className="text-xl text-white font-bold my-2">{title}</h4>
      <p>
        <b>Engine:</b> {engine}
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <p>
        <b>Tax:</b> {tax}
      </p>
    </div>
  );
};

export default Item;
