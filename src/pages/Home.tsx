import React from "react";
import {
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { useStore } from "../store";
import { Link } from "react-router-dom";

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
          {items.map(({ title, engine, price, id, img, tax }, idx) => (
            <div className="item" key={`${id} + ${idx}`}>
              {user ? (
                <Link to={"admin/" + id}>
                  <img className="rounded-md" src={img} alt={title} />
                </Link>
              ) : (
                <img className="rounded-md" src={img} alt={title} />
              )}
              <h4 className="text-xl text-white font-bold my-2">{title}</h4>
              <p>
                <b>Engine:</b> {engine}
              </p>
              <p>
                <b>Price:</b> {price}
              </p>
              <p>
                <b>Tax:</b> {tax}
              </p>
            </div>
          ))}
          {!items.length && <p>No Motos...</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
