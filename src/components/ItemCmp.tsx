import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { ItemWithId } from "../types";
import { useLocalize } from "../localization";

const ItemCmp = ({
  title,
  unit,
  year,
  power,
  id,
  img,
  engine,
  clickable = true,
}: ItemWithId & { clickable?: boolean }) => {
  const { user } = useStore();
  const { t } = useLocalize();

  return (
    <div className="item">
      {user && clickable ? (
        <Link to={"/admin/" + id}>
          <img className="rounded-md" src={img} alt={title} />
        </Link>
      ) : (
        <img className="rounded-md max-w-[350px]" src={img} alt={title} />
      )}
      <h4 className="text-xl text-white font-bold my-2">{title}</h4>
      <p>
        <b>{t("form.field.year")}:</b> {year}
      </p>
      <p>
        <b>{t("form.field.engine")}:</b> {engine}
      </p>
      <p>
        <b>{t("form.field.power")}:</b> {power}
      </p>
      <p>
        <b>{t("form.field.unit")}:</b> {unit}
      </p>
    </div>
  );
};

export default ItemCmp;
