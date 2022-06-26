import React from "react";
import {
  AiOutlineHome,
  AiOutlineHighlight,
  AiOutlineExperiment,
  AiOutlineFlag,
} from "react-icons/ai";

export function MobileMenu() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/80 z-30 flex items-center justify-center border-t border-primary/20 sm:hidden backdrop-blur-sm">
      <ul className="flex w-full justify-around items-center text-2xl divide-x-2 divide-primary/10 text-secondary">
        <li className="text-center flex flex-1 items-center h-16 justify-center">
          <a href="#">
            <AiOutlineHome />
          </a>
        </li>
        <li className="text-center flex flex-1 items-center h-16 justify-center">
          <a href="#services">
            <AiOutlineExperiment />
          </a>
        </li>
        <li className="text-center flex flex-1 items-center h-16 justify-center">
          <a href="#portfolio">
            <AiOutlineHighlight />
          </a>
        </li>
        <li className="text-center flex flex-1 items-center h-16 justify-center">
          <a href="#about">
            <AiOutlineFlag />
          </a>
        </li>
      </ul>
    </div>
  );
}
