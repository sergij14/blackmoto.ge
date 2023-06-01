import React from "react";
import { NavigateFunction } from "react-router-dom";
import { useLocalize } from "../localization";

const Menu = ({ navigate }: { navigate: NavigateFunction }) => {
  const { t } = useLocalize();

  return (
    <div className="flex gap-2 flex-col md:flex-row md:items-start">
      <button className="nav-btn">{t("nav.menu_1")}</button>
      <button className="nav-btn">{t("nav.menu_2")}</button>
      <button className="nav-btn">{(t("nav.menu_3") as string).split(' ')[0]}</button>
      <button className="nav-btn">{t("nav.menu_4")}</button>
    </div>
  );
};

export default Menu;
