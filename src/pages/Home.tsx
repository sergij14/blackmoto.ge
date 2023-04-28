import React from "react";
import {
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { useStore } from "../store";
import { Link } from "react-router-dom";
import Item from "../components/Item";

const Home = () => {
  const { items, user } = useStore();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-40 md:gap-56 py-8">
        <h4 className="text-5xl md:text-[60px] font-black text-center">
          Rent Motos In Tbilisi
        </h4>
        <div className="flex gap-2 flex-wrap justify-center">
          <button className="hero-btn">
            <ChatBubbleOvalLeftIcon /> Whatsapp
          </button>
          <button className="hero-btn">
            <ChatBubbleLeftIcon />
            Facebook
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-12 md:mt-14 py-8">
        <h4 className="section-title">Available Motos</h4>
        <div className="items">
          {items.map((item, idx) => (
            <Item {...item} key={`${item.id} + ${idx}`} />
          ))}
          {!items.length && <p>No Motos...</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
