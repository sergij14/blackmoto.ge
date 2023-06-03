import React from "react";
import {
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { useStore } from "../store";
import parse from "html-react-parser";
import Item from "../components/ItemCmp";
import { useLocalize } from "../localization";

// 1c1e1d
// 3d4343

const Home = () => {
  const { items, user } = useStore();
  const { t } = useLocalize();

  return (
    <>
      <div className="flex flex-col gap-14 md:gap-20 py-8">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 flex-col justify-center text-center sm:text-left sm:flex-row sm:justify-between items-center pb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[35px] md:leading-[50px] lg:leading-[60px] max-w-md">
              {parse(t("hero.slogan"))}
            </h2>
              <img className="w-[240px] sm:w-[310px] md:w-[390px] lg:w-[450px]" src="/assets/moto.png" />
          </div>
          <h4 className="text-center text-2xl md:text-3xl lg:text-4xl leading-[40px] md:leading-[45px] max-w-md lg:max-w-xl lg:leading-[55px] mx-auto">
            {parse(t("hero.text"))}
          </h4>
          <div className="flex gap-4 flex-wrap justify-center mt-4">
            <button className="btn-white">
              <img src="/assets/facebook.svg" className="w-6" />
            </button>
            <button className="btn-white">
              <img src="/assets/insta.svg" className="w-6" />
            </button>
            <button className="btn-white">
              <img src="/assets/whatsapp.svg" className="w-6" />
            </button>
          </div>
          <button className="btn-white self-center mt-4">
            <img src="/assets/call.svg" className="w-6" />
            +995 550 00 40 45
          </button>
        </div>

        <div id="section_about">
          <h4 className="section-title">{t("nav.menu_1")}</h4>
          <div
            className="flex flex-col md:flex-row gap-4 p-4 rounded-md"
            style={{
              backgroundColor: "rgb(28,30,29)",
              background:
                "linear-gradient(270deg, rgba(61,67,67,0.6) 0%, rgba(28,30,29,0.8) 80%)",
            }}
          >
            <p className="text-xl md:text-2xl w-full md:w-7/12 lg:w-8/12">
              {parse(t("about.text"))}
            </p>
            <img
              src="/assets/about.img.jpg"
              className="w-full md:w-5/12 lg:w-4/12 max-h-[340px] rounded-md h-full object-cover object-center"
              alt=""
            />
          </div>
          <p className="text-center text-xl md:text-2xl mt-8">
            {t("about.text_2")}
          </p>
        </div>

        <div
          className="flex flex-col mt-12 md:mt-14 py-8"
          id="section_motopark"
        >
          <h4 className="section-title">{t("nav.menu_2")}</h4>
          <div className="items">
            {items.map((item, idx) => (
              <Item {...item} key={`${item.id} + ${idx}`} />
            ))}
            {!items.length && <p>No Motos...</p>}
          </div>
          <p className="text-center text-xl md:text-2xl mt-12">
            {parse(t("motopark.text"))}
          </p>
        </div>

        <div id="section_terms">
          <h4 className="section-title">{t("nav.menu_3")}</h4>
          <p className="text-xl md:text-2xl mt-12">{parse(t("terms.text"))}</p>
        </div>

        <div id="section_contact">
          <h4 className="section-title">{t("nav.menu_4")}</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-xl md:text-2xl w-full md:w-5/12">
              {parse(t("contact.text"))}
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.262078152489!2d44.71542997720739!3d41.736439674269796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447343bb734497%3A0x74fd7a0309c20ab7!2s28a%20Avto%20Varazi%20St%2C%20T&#39;bilisi!5e0!3m2!1sru!2sge!4v1685682238679!5m2!1sru!2sge"
              allowFullScreen={false}
              loading="lazy"
              className="border-none md:w-7/12 h-[340px] rounded-md object-cover object-bottom"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
