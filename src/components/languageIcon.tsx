import { Language, LanguageCode } from "@/types";
import EN from "@/assets/flags/uk.png";
import ES from "@/assets/flags/spain.png";
import NL from "@/assets/flags/netherlands.png";
import DE from "@/assets/flags/germany.png";
import IT from "@/assets/flags/italy.png";
import FR from "@/assets/flags/france.png";
import Image from "next/image";

export const LanguageIcon = ({ language }: { language: Language }) => {
  const getLanguageIconSource = (languageCode: LanguageCode) => {
    switch (languageCode) {
      case "en":
        return EN;
      case "es":
        return ES;
      case "fr":
        return FR;
      case "de":
        return DE;
      case "it":
        return IT;
      case "nl":
        return NL;
    }
  };

  console.log(getLanguageIconSource(language.code).src);

  return (
    <Image
      src={getLanguageIconSource(language.code).src}
      alt={language.name}
      width={24}
      height={24}
    />
  );
};
