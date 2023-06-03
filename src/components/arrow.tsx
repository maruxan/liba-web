import React from "react";
import { useWindowSize } from "@/hooks";

type Props = {
  color: "black" | "white";
  direction: "left" | "right";
};

const Arrow = ({ color, direction }: Props) => {
  const { width: windowsWidth } = useWindowSize();

  const isMobile = windowsWidth && windowsWidth < 768;

  // big arrow pointing left
  if (direction === "left" && !isMobile) {
    return (
      <svg
        width="100"
        height="64"
        viewBox="0 0 100 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 37.25L21.3542 37.25L41.1458 56.5L33.3333 64L-3.09555e-06 32L33.3333 7.3183e-06L41.1458 7.50001L21.3542 26.75L100 26.75L100 37.25Z"
          fill={color}
        />
      </svg>
    );
  }

  // small arrow pointing left
  if (direction === "left" && isMobile) {
    return (
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 13.9688L8.54166 13.9688L16.4583 21.1875L13.3333 24L-1.16828e-06 12L13.3333 2.39088e-06L16.4583 2.8125L8.54166 10.0313L40 10.0313L40 13.9688Z"
          fill={color}
        />
      </svg>
    );
  }

  // big arrow pointing right
  if (direction === "right" && !isMobile) {
    return (
      <svg
        width="100"
        height="64"
        viewBox="0 0 100 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 26.75H78.6458L58.8542 7.5L66.6667 0L100 32L66.6667 64L58.8542 56.5L78.6458 37.25H0V26.75Z"
          fill={color}
        />
      </svg>
    );
  }

  // small arrow pointing right
  return (
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10.0312H31.4583L23.5417 2.8125L26.6667 0L40 12L26.6667 24L23.5417 21.1875L31.4583 13.9688H0V10.0312Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
