import React from "react";
import clsx from "clsx";
import { Color, fontColorClasses } from "@/types";
import { BsBehance, BsDribbble, BsInstagram } from "react-icons/bs";

type Props = {
  direction?: "col" | "row";
  color?: Color;
};

const SocialLinks = ({ direction = "col", color = "primary" }: Props) => {
  return (
    <div
      className={clsx(
        "flex gap-6 items-center justify-center",
        direction === "col" && "flex-col"
      )}
    >
      {/* TODO: link to actual sites */}
      <BsInstagram
        className={clsx("text-primary w-7 h-7", fontColorClasses[color])}
      />
      <BsBehance
        className={clsx("text-primary w-7 h-7", fontColorClasses[color])}
      />
      <BsDribbble
        className={clsx("text-primary w-7 h-7", fontColorClasses[color])}
      />
    </div>
  );
};

export default SocialLinks;
