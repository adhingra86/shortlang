import { ReactNode } from "react";
import { Card } from "@mantine/core";

const CardComponent = ({ children }: { children: ReactNode }) => {
  return (
    <Card
      withBorder={true}
      className="min-w-[300px] min-h-[200px] items-center justify-center hover:bg-slate-100 rounded-2xl"
    >
      {children}
    </Card>
  );
};

export default CardComponent;
