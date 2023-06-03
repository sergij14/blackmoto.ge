import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import useMeasure from "react-use-measure";
import Menu from "./Menu";
import { useLocalize } from "../localization";
import { useStore } from "../store";

const Header = () => {
  const navigate = useNavigate();
  const { setHeaderHeight, headerHeight } = useStore();
  const [headerRef, headerBounds] = useMeasure();
  const [headerCn, setHeaderCn] = useState("static");

  const isSticky = (ev: Event) => {
    const scrollTop = window.scrollY;

    scrollTop >= headerBounds.height
      ? setHeaderCn("sm:fixed")
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

  const customHeaderStyles = useMemo(
    () =>
      headerHeight !== undefined && headerHeight > 200
        ? {
            justifyContent: "center",
          }
        : {},
    [headerHeight]
  );

  return (
    <header
      ref={headerRef}
      className={`${headerCn} top-0 w-full shadow-lg z-50 border-b-4 border-primary border-opacity-10`}
      style={{
        background: "url(../assets/back.jpg)",
      }}
    >
      <div className="max-w-screen-xl px-8 mx-auto">
        <div
          style={{ ...customHeaderStyles }}
          className="flex gap-6 items-center flex-wrap py-8 relative justify-between"
        >
          <h2 className="text-3xl text-primary">
            <Link to="/">
              <img className="w-32" src="/assets/logo.png" alt="BlackMoto.GE" />
            </Link>
          </h2>
          <div data-menu-trigger="true" className="lg:hidden">
            <button className="btn">
              <Bars3Icon />
            </button>
          </div>
          <div className="hidden lg:block">
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
