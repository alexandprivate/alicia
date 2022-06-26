import React from "react";
import { Button } from "./Button";
import { BsEnvelope } from "react-icons/bs";
import { MobileMenu } from "./";
import { Modal, useModal } from "./Modal";

export function Header() {
  const { show, toggleModal } = useModal();

  return (
    <div className="w-full px-4 fixed z-20">
      {show && <Modal onClose={toggleModal}></Modal>}
      <MobileMenu />
      <div className="container h-20 shadow-xl rounded-xl flex mt-6 items-center justify-between px-5 bg-white/80 backdrop-blur-sm">
        <h2 className="font-serif text-3xl text-secondary">Alicia.</h2>
        <nav className="flex items-center space-x-6">
          <ul className="hidden sm:flex space-x-6 capitalize">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>

          <Button onClick={toggleModal}>
            <span className="hidden md:block">Contact</span>
            <BsEnvelope className="block md:hidden" size={18} />
          </Button>
        </nav>
      </div>
    </div>
  );
}
