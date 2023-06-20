import React from "react";
import clsx from "clsx";
import { Color, fontColorClasses } from "@/types";

type Props = {
  children: string;
  color?: Color;
};

const Subtitle = ({ children, color = "primary" }: Props) => {
  return (
    <h2 className={clsx("font-bold text-4xl", fontColorClasses[color])}>
      {children}
    </h2>
  );
};

export default Subtitle;
