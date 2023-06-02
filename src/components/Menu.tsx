import React, { useEffect, useRef, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { useLocalize } from "../localization";
import { useStore } from "../store";
import LanguageSwitcher from "./LanguageSwitcher";

const Menu = ({
  navigate,
  isBurgerMenu,
}: {
  isBurgerMenu?: boolean;
  navigate: NavigateFunction;
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const { t } = useLocalize();
  const { headerHeight } = useStore();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = (id: string) => {
    const element = document.getElementById("section_" + id);

    if (element && headerHeight) {
      const elementPosition = element.offsetTop;

      window.scrollTo({
        top: elementPosition - (headerHeight + 120),
        behavior: "smooth",
      });
    }

    if (!element) {
      navigate("/");
    }
  };

  const onOutsideClick = (ev: Event) => {
    const isInMenu = menuRef.current?.contains(ev.target as Node);
    const triggerEl = document.querySelector('[data-menu-trigger="true"]');
    const isTriggerBtn = triggerEl?.contains(ev.target as Node);

    if (isTriggerBtn) {
      setShowMenu?.(true);
    }

    if (!isTriggerBtn && !isInMenu) {
      setShowMenu?.(false);
    }
  };

  useEffect(() => {
    if (isBurgerMenu) {
      document.addEventListener("click", onOutsideClick);
    }

    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, [isBurgerMenu]);

  const menuStyles = isBurgerMenu
    ? {
        display: showMenu ? "flex" : "none",
        padding: "1rem",
      }
    : {};

  return (
    <div ref={menuRef} className="vertical-nav-inner" style={{ ...menuStyles }}>
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
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Menu;
