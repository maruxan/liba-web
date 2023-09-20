import React from 'react';
import Link from 'next/link';

const TopNavbar = () => {
  return (
    <div className="py-6 px-12 flex items-center justify-between">
      <span className="font-black text-4xl text-primary">LIBA.</span>
      <ul className="flex gap-8 items-center">
        <li>
          <Link href="/about">
            <div className="font-bold text-lg text-primary">ABOUT US</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="font-bold text-lg bg-primary text-secondary py-1 px-6 rounded-xl shadow-md">
              CONTACT
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
