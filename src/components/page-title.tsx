import React from "react";

type Props = {
  children: string | JSX.Element;
};

const PageTitle = ({ children }: Props) => {
  return (
    <h1 className="text-primary font-black text-3xl md:text-6xl uppercase drop-shadow-2xl">
      {children}
    </h1>
  );
};

export default PageTitle;
