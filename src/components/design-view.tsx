import React from "react";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { PageTitle, Subtitle } from ".";
import bgImage from "public/design-bg-image.png";

const DesignView = () => {
  // TODO: work portfolio
  const handleSeeWork = () => { };

  return (
    <div className="flex flex-col justify-between h-full">
      <Image
        src={bgImage}
        alt="background image"
        className="absolute z-[-1] object-cover"
        fill
      />

      <div className="max-w-xl">
        <PageTitle>design that gives meaning</PageTitle>
      </div>
      <div className="self-end max-w-md text-right flex flex-col gap-4 items-end">
        <Subtitle>
          we craft the lenguage that speaks your brand identity
        </Subtitle>
        <button
          className="flex gap-3 items-center text-4xl text-primary font-bold"
          onClick={handleSeeWork}
        >
          <span>see work</span>
          <CgArrowLongRight className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
};

export default DesignView;
