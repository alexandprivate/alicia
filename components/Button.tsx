import React from "react";

type Flavor = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  flavor?: Flavor;
}

const flavors: Record<Flavor, string> = {
  primary:
    "bg-primary h-12 px-6 rounded-full text-sm uppercase shadow-xl tracking-wider text-white hover:bg-primary/60",
  secondary:
    "bg-secondary h-12 px-6 rounded-full text-sm uppercase shadow-xl tracking-wider text-white hover:bg-secondary/80 hover:shadow-lg transition-all",
};

export function Button({
  children,
  onClick,
  flavor = "secondary",
}: ButtonProps) {
  return (
    <button onClick={onClick} className={flavors[flavor]}>
      {children}
    </button>
  );
}
