import React from "react";
import clsx from "clsx";
import { BsBehance, BsDribbble, BsInstagram } from "react-icons/bs";
import { Color, fontColorClasses } from "@/types";

type Props = {
  direction?: "col" | "row";
  color?: Color;
  size?: "sm" | "md" | "lg";
};

const SocialLinks = ({
  direction = "col",
  color = "primary",
  size = "md",
}: Props) => {
  return (
    <div
      className={clsx(
        "flex gap-3 items-center justify-start",
        direction === "col" && "flex-col justify-center",
        size === "md" && "gap-4",
        size === "lg" && "gap-6",
      )}
    >
      {/* TODO: link to actual sites */}
      <BsInstagram
        className={clsx(
          "w-7 h-7",
          size === "lg" && "w-10 h-10",
          size === "sm" && "w-6 h-6",
          fontColorClasses[color],
        )}
      />
      <BsBehance
        className={clsx(
          "w-7 h-7",
          size === "lg" && "w-10 h-10",
          size === "sm" && "w-6 h-6",
          fontColorClasses[color],
        )}
      />
      <BsDribbble
        className={clsx(
          "w-7 h-7",
          size === "lg" && "w-10 h-10",
          size === "sm" && "w-6 h-6",
          fontColorClasses[color],
        )}
      />
    </div>
  );
};

export default SocialLinks;
