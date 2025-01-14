export type IconProps = {
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: string;
  strokeColor?: string;
  fill?: string;
};

export type LanguageCode = "nl" | "en" | "fr" | "de" | "it" | "es";

export type Language = {
  id: string;
  name: string;
  code: LanguageCode;
  nativeName: string;
};

export type Category = {
  category_id: number;
  name: string;
  title: string;
  language: LanguageCode;
  created_at: string;
};

export type Phrase = {
  phrase_id: number;
  category_id: number;
  language_code: LanguageCode;
  phrase: string;
  translation: string;
  level_code: number;
};
