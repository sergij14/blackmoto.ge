import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import useMeasure from "react-use-measure";
import Menu from "./Menu";
import { useLocalize } from "../localization";
import { useStore } from "../store";

const Header = () => {
  const navigate = useNavigate();
  const { setHeaderHeight } = useStore();
  const [headerRef, headerBounds] = useMeasure();
  const [headerCn, setHeaderCn] = useState("static");

  const isSticky = (ev: Event) => {
    const scrollTop = window.scrollY;

    scrollTop >= headerBounds.height
      ? setHeaderCn("fixed")
      : setHeaderCn("static");
  };

  useEffect(() => {
    setHeaderHeight(headerBounds.height);
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [headerBounds.height]);

  const { t } = useLocalize();

  return (
    <header
      ref={headerRef}
      className={`${headerCn} top-0 w-full bg-back-secondary bg-opacity-90 z-50`}
    >
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="flex flex-col gap-4 flex-wrap items-center py-8 relative sm:flex-row sm:justify-between">
          <h2 className="text-3xl text-primary">
            <Link to="/">
              <img className="w-28" src="/assets/logo.png" alt="BlackMoto.GE" />
            </Link>
          </h2>
          <div data-menu-trigger="true" className="md:hidden">
            <button className="nav-btn">
              <Bars3Icon />
            </button>
          </div>
          <div className="hidden md:block">
            <Menu navigate={navigate} />
          </div>

          <div
            className="vertical-nav"
            style={{
              top: headerBounds.height + 20,
            }}
          >
            <Menu isBurgerMenu navigate={navigate} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
