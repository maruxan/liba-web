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

const Subtitle = ({ children, color = "primary" }: Props) => {
  return (
    <h2 className={clsx("font-bold text-4xl", fontColorClasses[color])}>
      {children}
    </h2>
  );
};

export default Subtitle;
