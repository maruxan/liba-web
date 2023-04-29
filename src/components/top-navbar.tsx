import React from "react";

const TopNavbar = () => {
  const handleAboutUs = () => {
    console.log("about us...");
  };
  const handleContact = () => {
    console.log("contact...");
  };

  return (
    <div className="py-6 px-12 flex items-center justify-between">
      <span className="font-black text-4xl text-primary">LIBA.</span>
      <ul className="flex gap-8 items-center">
        <li className="font-bold text-lg text-primary">
          <button type="button" onClick={handleAboutUs}>
            ABOUT US
          </button>
        </li>
        <li className="font-bold text-lg bg-primary text-secondary py-1 px-6 rounded-xl shadow-md">
          <button type="button" onClick={handleContact}>
            CONTACT
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
