import React, { useEffect } from "react";
import { useStore } from "../store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userSignIn, userSignOut } from "../api/authMethods";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useStore();

  return (
    <>
      <header className="flex flex-col gap-4 items-center py-8 md:flex-row md:justify-between">
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
      </header>
      {pathname.slice(1) === "admin" && (
        <>
          {user ? (
            <div className="flex flex-col gap-4 items-center pb-8 md:flex-row md:justify-between">
              <div className="flex gap-2 items-center">
                {user.photoURL && (
                  <img src={user.photoURL} className="w-8 rounded-full" />
                )}
                {user.email}
              </div>
              <button className="nav-btn" onClick={() => userSignOut(navigate)}>
                <ArrowLeftOnRectangleIcon /> Sign Out
              </button>
            </div>
          ) : (
            <button className="nav-btn w-max" onClick={userSignIn}>
              <ArrowRightOnRectangleIcon /> Sign In
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Header;
