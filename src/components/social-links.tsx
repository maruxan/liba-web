import React from "react";
import { BsBehance, BsDribbble, BsInstagram } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      {/* TODO: link to actual sites */}
      <BsInstagram className="text-primary w-7 h-7" />
      <BsBehance className="text-primary w-7 h-7" />
      <BsDribbble className="text-primary w-7 h-7" />
    </div>
  );
};

export default SocialLinks;
