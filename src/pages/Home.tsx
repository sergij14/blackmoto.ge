import React from "react";
import {
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { useStore } from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  const { items } = useStore();
  return (
    <>
      <div className="relative flex flex-col justify-center items-center gap-40 md:gap-56 py-8">
      <img className="-z-10 absolute top-0 left-0 opacity-30 w-full h-full object-contain object-top" alt="" src="/rent-moto/assets/hero.svg" />

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
        <h4 className="text-3xl font-black mb-4">Available Motos</h4>
        <div className="items">
          {items.map(({ title, engine, price, id, img, tax }, idx) => (
            <div className="item" key={`${id} + ${idx}`}>
              <Link to={"admin/" + id}>
                <img className="rounded-md" src={img} alt={title} />
              </Link>
              <Link
                className="text-xl text-white font-bold my-2"
                to={"admin/" + id}
              >
                {title}
              </Link>
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
        </div>
      </div>
    </>
  );
};

export default Home;
