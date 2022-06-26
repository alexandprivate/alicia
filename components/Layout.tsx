import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-700">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
