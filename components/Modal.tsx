import React from "react";
import { Button } from "./Button";

export function useModal() {
  const [show, setShow] = React.useState(false);
  function toggleModal() {
    setShow((currentState) => !currentState);
  }
  return { show, toggleModal };
}

interface ModalProps {
  onClose: () => void;
}

export function Modal({ onClose }: ModalProps) {
  React.useEffect(() => {
    const html = document.querySelectorAll("html")[0];
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-primary/50 fixed top-0 left-0 flex items-center flex-col justify-center h-full w-full z-20 backdrop-blur-sm">
      <div className="relative w-full px-4 py-10 max-w-3xl overflow-auto">
        <div className="w-full p-8 max-w-3xl bg-white rounded-xl shadow-xl shadow-primary/50 relative">
          <button
            className="absolute -top-4 -right-4 h-10 w-10 bg-secondary text-white rounded-full shadow-xl shadow-secondary/50 text-xl"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="space-y-4 mb-8">
            <h2 className="font-serif text-4xl text-primary opacity-70">
              Contact Us
            </h2>
            <p className="leading-relaxed text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              voluptatibus autem similique. Saepe dolorem magni, nihil
              laudantium eligendi unde aliquid.
            </p>
          </div>
          <form className="flex w-full flex-col gap-y-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full h-12 border border-primary rounded-xl px-4 outline-primary"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full h-12 border border-primary rounded-xl px-4 outline-primary"
            />
            <textarea
              required
              placeholder="Type your message..."
              className="w-full border border-primary rounded-xl h-40 p-4 outline-primary"
            ></textarea>

            <Button onClick={() => {}}>Send message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
