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
  id: number;
  name: string;
  title: string;
  language: LanguageCode;
  created_at: string;
};

export type Phrase = {
  id: number;
  categoryId: number[];
  language: LanguageCode;
  phrase: string;
  translation: string;
};
