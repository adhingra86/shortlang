import Image from "next/image";

import Travel from "@/assets/categories/travel.png";
import Greetings from "@/assets/categories/greetings.png";

export const CategoriesIcon = ({
  category,
  width,
  height,
}: {
  category: string;
  width?: number;
  height?: number;
}) => {
  const getCategoryIconSource = (category: string) => {
    switch (category) {
      case "Travel":
        return Travel;
      case "Greetings":
        return Greetings;
      default:
        return Travel;
    }
  };

  return (
    <Image
      src={getCategoryIconSource(category).src}
      alt={category}
      width={width ?? 24}
      height={height ?? 24}
    />
  );
};
