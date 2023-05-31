import React from "react";
import { useStore } from "../store";
import { Lang } from "../types";

const langs: { label: string; code: Lang }[] = [
  {
    label: "GE",
    code: "ge",
  },
  {
    label: "RU",
    code: "ru",
  },
];

const LanguageSwitcher = () => {
  const { setLang, lang } = useStore();

  return (
    <div className="fixed bottom-0 m-8 left-0">
      <div className="flex gap-2 items-center">
        {langs.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`nav-btn px-3 py-2 gap-2 bg-opacity-100 ${
              code === lang ? "opacity-100" : "opacity-70"
            }`}
          >
            <img className="w-5" src={`/assets/${code}.svg`} />
            GE
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
