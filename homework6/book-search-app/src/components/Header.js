import React from "react";
import Input from "./Input";
function Header() {
  return (
    <div className="p-16 text-center bg-slate-500 text-white">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Search the Most
        </span>{" "}
        popular books
      </h1>
      
      <Input />
    </div>
  );
}

export default Header;
