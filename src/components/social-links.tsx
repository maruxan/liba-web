import React from "react";
import clsx from "clsx";
import { BsBehance, BsDribbble, BsInstagram } from "react-icons/bs";
import { Color, fontColorClasses } from "@/types";

type Props = {
  direction?: "col" | "row";
  color?: Color;
  size?: "md" | "lg";
};

const SocialLinks = ({
  direction = "col",
  color = "primary",
  size = "md",
}: Props) => {
  return (
    <div
      className={clsx(
        "flex gap-6 items-center justify-start",
        direction === "col" && "flex-col justify-center"
      )}
    >
      {/* TODO: link to actual sites */}
      <BsInstagram
        className={clsx(
          "w-7 h-7",
          size === "lg" && "w-10 h-10",
          fontColorClasses[color]
        )}
      />
      <BsBehance
        className={clsx(
          "w-7 h-7",
          size === "lg" && "w-10 h-10",
          fontColorClasses[color]
        )}
      />
      <BsDribbble
        className={clsx(
          "w-7 h-7",
          size === "lg" && "w-10 h-10",
          fontColorClasses[color]
        )}
      />
    </div>
  );
};

export default SocialLinks;
