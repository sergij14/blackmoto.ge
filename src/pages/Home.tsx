import React from "react";
import {
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { useStore } from "../store";
import parse from "html-react-parser";
import Item from "../components/ItemCmp";
import { useLocalize } from "../localization";

const Home = () => {
  const { items, user } = useStore();
  const { t } = useLocalize();

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-40 md:gap-56 py-8">
        <div>
          <h2 className="text-3xl">{t("hero.slogan")}</h2>
          <h4 className="text-center text-2xl">{parse(t("hero.text"))}</h4>
        </div>
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
