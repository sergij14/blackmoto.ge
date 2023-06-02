import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import useMeasure from "react-use-measure";
import Menu from "./Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocalize } from "../localization";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [headerRef, headerBounds] = useMeasure();
  const [headerCn, setHeaderCn] = useState("static");

  const isSticky = (ev: Event) => {
    const scrollTop = window.scrollY;

    scrollTop >= headerBounds.height
      ? setHeaderCn("fixed")
      : setHeaderCn("static");
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [headerBounds.height]);

  const { t } = useLocalize();

  return (
    <header
      ref={headerRef}
      className={`${headerCn} top-0 w-full bg-black bg-opacity-90 z-50`}
    >
      <LanguageSwitcher />
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="flex flex-col gap-4 items-center py-8 sm:flex-row sm:justify-between relative">
          <h2 className="text-3xl text-primary">
            <Link to="/">#BlackMoto.GE</Link>
          </h2>
          <div className="md:hidden">
            <button className="nav-btn" onClick={() => setShowMenu(!showMenu)}>
              <Bars3Icon />

            </button>
          </div>
          <div className="hidden md:block">
            <Menu navigate={navigate} />
          </div>
          {showMenu && (
            <div
              className={`absolute bg-black left-1/2 sm:left-[initial] sm:right-0 sm:transform-none transform -translate-x-1/2 p-4 md:hidden`}
              style={{
                top: headerBounds.height,
              }}
            >
              <Menu navigate={navigate} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
