import React from "react";

const BottomNavbar = () => {
  return (
    <div className="py-6 px-12 flex items-center justify-center">
      <nav className="flex justify-center gap-12">
        <button
          type="button"
          onClick={() => { }}
          className="font-bold text-lg text-primary"
        >
          DESIGN
        </button>
        <button
          type="button"
          onClick={() => { }}
          className="font-bold text-lg text-primary"
        >
          DEVELOPMENT
        </button>
        <button
          type="button"
          onClick={() => { }}
          className="font-bold text-lg text-primary"
        >
          PHOTOGRAPHY
        </button>
      </nav>
    </div>
  );
};

export default BottomNavbar;
