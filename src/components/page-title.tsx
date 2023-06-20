import React from "react";
import clsx from "clsx";
import { Color, fontColorClasses } from "@/types";

type Props = {
  children: string;
  color?: Color;
};

const PageTitle = ({ children, color = "primary" }: Props) => {
  return (
    <h1
      className={clsx(
        "font-black text-3xl md:text-6xl uppercase drop-shadow-2xl",
        fontColorClasses[color]
      )}
    >
      {children}
    </h1>
  );
};

export default PageTitle;
