// components/layout/Header.tsx

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-xl font-bold">
          <Link href="/">MyProperty</Link>
        </h2>

        {/* Navigation */}
        <nav className="flex gap-4">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
