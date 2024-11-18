import { IconProps } from "@/types";

export const UserIcon = ({
  width,
  height,
  strokeColor,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor ?? "currentColor"}
      strokeWidth={strokeWidth ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
};
