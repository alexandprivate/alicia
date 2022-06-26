import Image from "next/image";
import { unsplash } from "../../images";
import { AiOutlineArrowRight } from "react-icons/ai";

const services = [
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing.",
  "Lorem ipsum dolor sit.",
];

const Icon = () => {
  return (
    <div className="h-10 w-10 border rounded-full border-white/40 bg-white/30 flex items-center justify-center shrink-0">
      <AiOutlineArrowRight
        className="text-white"
        size={20}
      ></AiOutlineArrowRight>
    </div>
  );
};

export function Services() {
  return (
    <div className="relative px-4 scroll-mt-48" id="services">
      <div className="container relative">
        <div className="h-96 w-96 absolute -bottom-10 -right-10 overflow-hidden flex flex-wrap gap-2">
          {new Array(2000).fill("").map((i, index) => (
            <div
              key={index}
              className="h-1 w-1 bg-primary/40 rounded-full"
            ></div>
          ))}
        </div>

        <div className="h-56 w-56 absolute -top-10 -left-10 border-t border-l border-primary/30 rounded-tl-xl"></div>

        <div className="w-full bg-primary rounded-xl grid lg:grid-cols-2 overflow-hidden mt-12 shadow-xl shadow-primary/30 relative">
          <div className="text-white text-lg p-10 xl:p-16 order-2 lg:order-1">
            <h2 className="text-5xl font-bold text-white opacity-70 font-serif mb-6">
              Services
            </h2>
            <p className="leading-loose text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident iure neque ea facilis quam ratione. Corporis at
              consectetur accusamus minima?
            </p>
            {services.map((i, index) => (
              <div key={index} className="flex items-center gap-x-4 mt-8">
                <Icon />
                <p>{i}</p>
              </div>
            ))}
          </div>
          <div className="bg-white h-[400px] w-full overflow-hidden relative lg:h-full order-1 lg:order-2">
            <Image
              layout="fill"
              src={unsplash({ id: "IH7wPsjwomc", size: "1000x800" })}
              alt="hero image"
              objectFit="cover"
              blurDataURL={unsplash({ id: "IH7wPsjwomc", size: "1x1" })}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
