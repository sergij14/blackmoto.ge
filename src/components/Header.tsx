import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-90 z-50">
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="flex flex-col gap-4 items-center py-8 md:flex-row md:justify-between">
          <h2 className="text-3xl md:text-4xl font-black">
            <Link to="/">#Moto Rent</Link>
          </h2>
          <nav className="flex gap-2 flex-col items-center justify-center sm:flex-row flex-wrap">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
