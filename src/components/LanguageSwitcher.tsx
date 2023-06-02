import React from "react";
import { useStore } from "../store";
import { Lang } from "../types";

const langs: { label: string; code: Lang }[] = [
  // {
  //   label: "GE",
  //   code: "ge",
  // },
  {
    label: "RU",
    code: "ru",
  },
];

const LanguageSwitcher = () => {
  const { setLang, lang } = useStore();

  return (

      <>
        {langs.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`nav-btn bg-opacity-100 ${
              code === lang ? "opacity-100" : "opacity-70"
            }`}
          >
            <img className="w-5" src={`/assets/${code}.svg`} />
            {label}
          </button>
        ))}
      </>

  );
};

export default LanguageSwitcher;
