import React from "react";
import {
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { NavigateFunction } from "react-router-dom";

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

export default Menu;
