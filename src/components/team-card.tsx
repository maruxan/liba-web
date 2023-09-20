import React from "react";
import Image, { StaticImageData } from "next/image";
import SocialLinks from "./social-links";
import { Theme } from "@/types";
import clsx from "clsx";

type Props = {
  name: string;
  role: Theme;
  imageSrc: StaticImageData;
};

const TeamCard = ({ imageSrc, role, name }: Props) => {
  return (
    <div className="relative h-24 mt-10 ml-14 max-w-xs">
      <Image
        src={imageSrc}
        alt="Team member photo"
        width={96}
        height={96}
        className="rounded-full absolute -top-8 -left-12 z-[2]"
      />
      <div className="bg-[#ebebeb] rounded-lg shadow-xl h-full flex flex-col justify-center pl-16 pr-10">
        <div
          className={clsx(
            "uppercase font-bold text-sm tracking-wider leading-none",
            role === "design" && "text-[#0070B8]",
            role === "development" && "text-[#EAA546]",
            role === "photography" && "text-[#1D8D22]",
          )}
        >
          {role === "design" && "designer"}
          {role === "development" && "developer"}
          {role === "photography" && "photographer"}
        </div>
        <div className="leading-none mb-1 text-xl font-bold text-black">
          {name}
        </div>
        <SocialLinks size="sm" color="black" direction="row" />
      </div>
    </div>
  );
};

export default TeamCard;
