import Image from "next/image";
import { unsplash } from "../../images";
import { Button } from "../Button";
import { Brands } from "./Brands";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 gap-y-8 text-center">
      <h1 className="text-7xl font-serif opacity-70">Redefining Home</h1>
      <p className="text-xl font-thin leading-relaxed max-w-3xl text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum id ratione
        impedit molestiae laborum? Saepe iusto deserunt quos repudiandae
        architecto iure nesciunt et perferendis? Assumenda fugiat beatae soluta
        veritatis nobis!
      </p>
      <Button onClick={() => {}}>Designs Showcase</Button>
    </div>
  );
}

export function Hero() {
  return (
    <div>
      <div className="bg-primary pt-48">
        <div className="w-full mx-auto max-w-5xl px-4 text-white">
          <Intro></Intro>
        </div>
        <div className="relative w-full">
          <div className="absolute w-full bg-white to-white h-1/2 bottom-0" />
          <div className="flex items-center justify-center mt-24 font-serif text-white space-x-6 text-lg">
            <span className="opacity-70">Fresh</span>
            <span className="h-1 w-1 bg-white/40 rounded-full" />
            <span className="opacity-70">Simple</span>
            <span className="h-1 w-1 bg-white/40 rounded-full" />
            <span className="opacity-70">Crafted</span>
          </div>
          <div className="w-full px-4">
            <div className="container xl:max-w-5xl mt-6 flex items-center justify-center relative gap-6">
              <div className="h-64 w-64 absolute -top-8 -left-8 overflow-hidden flex flex-wrap gap-2">
                {new Array(1000).fill("").map((i, index) => (
                  <div
                    key={index}
                    className="h-1 w-1 bg-white/30 rounded-full"
                  ></div>
                ))}
              </div>

              <div className="h-40 w-40 absolute -bottom-10 -right-10 border-r border-b border-primary/30 rounded-br-xl"></div>
              <div className="h-[500px] w-full shrink-0 bg-white overflow-hidden rounded-xl relative shadow-xl shadow-primary/30">
                <Image
                  layout="fill"
                  src={unsplash({ id: "L7EwHkq1B2s", size: "1000x1000" })}
                  quality="100"
                  priority={true}
                  alt="hero image"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={unsplash({ id: "L7EwHkq1B2s", size: "1x1" })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Brands />
      </div>
    </div>
  );
}
