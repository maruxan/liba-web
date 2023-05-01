import React from "react";

type Props = {
  children: string;
};

const PageTitle = ({ children }: Props) => {
  return (
    <h1 className="font-black text-6xl text-primary uppercase drop-shadow-2xl">
      {children}
    </h1>
  );
};

export default PageTitle;
