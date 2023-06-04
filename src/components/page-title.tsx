import React from "react";
import clsx from "clsx";

type Props = {
  children: string;
  color?: "primary" | "white" | "black";
};

const fontColorClasses = {
  primary: "text-primary",
  white: "text-white",
  black: "text-black",
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
