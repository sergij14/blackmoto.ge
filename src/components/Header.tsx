import React, { useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import useMeasure from "react-use-measure";
import { useStore } from "../store";

const Menu = ({ navigate }: { navigate: NavigateFunction }) => (
  <div className="flex gap-2 flex-col md:flex-row">
    <button className="nav-btn" onClick={() => navigate("/")}>
      <HomeIcon />
      Home
    </button>
    <button className="nav-btn" onClick={() => navigate("/admin")}>
      <UserCircleIcon />
      Admin
    </button>
    <button className="nav-btn">
      <ChatBubbleOvalLeftIcon /> WhatsApp
    </button>
  </div>
);

const Header = () => {
  const navigate = useNavigate();
  const { setLang } = useStore();
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

  return (
    <header
      ref={headerRef}
      className={`${headerCn} top-0 w-full bg-black bg-opacity-90 z-50`}
    >
      <div className="fixed bottom-0 m-8 left-0">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setLang("ru")}
            className="nav-btn px-3 py-2 gap-2"
          >
            <img className="w-6" src="/assets/ru.svg" />
            RU
          </button>
          <button
            onClick={() => setLang("ge")}
            className="nav-btn px-3 py-2 gap-2"
          >
            <img className="w-5" src="/assets/ge.svg" />
            GE
          </button>
        </div>
      </div>
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="flex flex-col gap-4 items-center py-8 sm:flex-row sm:justify-between relative">
          <h2 className="text-3xl md:text-4xl font-black">
            <Link to="/">#Moto Rent</Link>
          </h2>
          <div className="md:hidden">
            <button className="nav-btn" onClick={() => setShowMenu(!showMenu)}>
              <Bars3Icon />
              Menu
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
