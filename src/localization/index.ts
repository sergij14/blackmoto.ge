import RU from "./languages/ru";
import GE from "./languages/ge";
import { useStore } from "../store";
import { Lang } from "../types";

export const getTranslations = (langCode: Lang) => {
  if (langCode === "ge") return GE;
  if (langCode === "ru") return RU;
  return RU;
};

export const useLocalize = () => {
  const { lang } = useStore();

  const localize = (phraseKey: string) => {
    const langObj = getTranslations(lang);
    return langObj[phraseKey];
  };

  return { localize };
};
