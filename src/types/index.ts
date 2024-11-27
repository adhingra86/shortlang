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
