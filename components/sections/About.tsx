import React from "react";
import { unsplash } from "../../images";
import Image from "next/image";

const data = [
  {
    name: "Mary Roberts",
    position: "interior designer",
    image: "QXevDflbl8A",
  },
  { name: "Ali Smith", position: "interior designer", image: "3TLl_97HNJo" },
  {
    name: "Leonor Rachels",
    position: "graphic designer",
    image: "pyrJHb1QTRA",
  },
  { name: "Alex Craig", position: "Contractor", image: "WNoLnJo7tS8" },
];

export function About() {
  return (
    <div className="relative px-4 scroll-mt-40" id="about">
      <div className="container relative">
        <h2 className="text-5xl font-bold text-primary text-center  font-serif mb-6">
          About Us
        </h2>
        <div className="max-w-2xl text-lg mb-12 text-center mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quos cum voluptates voluptatem incidunt. Incidunt placeat maxime
            modi nesciunt voluptatem.
          </p>
        </div>
      </div>

      <div className="max-w-xl md:max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-10">
        {data.map((i) => (
          <div key={i.name} className="inline-flex flex-col">
            <div className="h-28 w-28 lg:h-32 lg:w-32 shrink-0 bg-white overflow-hidden relative shadow-xl shadow-primary/30 rounded-full mx-auto">
              <Image
                layout="fill"
                src={unsplash({ id: i.image, size: "400x400" })}
                alt="hero image"
                objectFit="cover"
                blurDataURL={unsplash({ id: i.image, size: "400x400" })}
                placeholder="blur"
              />
            </div>
            <div className="text-center space-y-2 mt-6">
              <h3 className="font-serif text-primary text-xl lg:text-2xl">
                {i.name}
              </h3>
              <p className="capitalize text-gray-400">{i.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
