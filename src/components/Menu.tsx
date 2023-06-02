import React from "react";
import { NavigateFunction } from "react-router-dom";
import { useLocalize } from "../localization";

const Menu = ({ navigate }: { navigate: NavigateFunction }) => {
  const { t } = useLocalize();

  const handleScroll = (id: string) => {
    const element = document.getElementById("section_" + id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex gap-2 flex-col md:flex-row md:items-start">
      <button onClick={() => handleScroll("about")} className="nav-btn">
        {t("nav.menu_1")}
      </button>
      <button onClick={() => handleScroll("motopark")} className="nav-btn">
        {t("nav.menu_2")}
      </button>
      <button onClick={() => handleScroll("terms")} className="nav-btn">
        {(t("nav.menu_3") as string).split(" ")[0]}
      </button>
      <button onClick={() => handleScroll("contact")} className="nav-btn">
        {t("nav.menu_4")}
      </button>
    </div>
  );
};

export default Menu;
