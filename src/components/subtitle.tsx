import React from "react";

type Props = {
  children: string | JSX.Element;
};

const Subtitle = ({ children }: Props) => {
  return <h2 className="font-bold text-4xl text-primary">{children}</h2>;
};

export default Subtitle;
