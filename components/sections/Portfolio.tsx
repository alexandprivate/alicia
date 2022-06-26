import Image from "next/image";
import { unsplash, Unsplash } from "../../images";
import { Button } from "../Button";

interface Data extends Unsplash {
  name: string;
}

const data: Data[] = [
  { id: "1vMz2_MclrM", size: "400x400", name: "livingroom" },
  { id: "McmcjgGk8uM", size: "400x400", name: "Ceilings" },
  { id: "2cwqJgtQ3D0", size: "400x400", name: "Rustic" },
  { id: "jn7uVeCdf6U", size: "400x400", name: "Floors" },
  { id: "1hlFqUdFv1s", size: "400x400", name: "Plants" },
  { id: "I4MhWjuf5Xk", size: "400x400", name: "Tiles" },
  { id: "_AK42TQRyCw", size: "400x400", name: "Kitchens" },
  { id: "P_0tnQ8hb70", size: "400x400", name: "Bathroom" },
];

export function Portfolio() {
  return (
    <div className="px-4 scroll-mt-40" id="portfolio">
      <div className="container">
        <h2 className="text-5xl font-bold text-primary text-center  font-serif mb-6">
          Portfolio
        </h2>
        <div className="max-w-2xl text-lg mb-12 text-center mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quos cum voluptates voluptatem incidunt. Incidunt placeat maxime
            modi nesciunt voluptatem.
          </p>
        </div>
      </div>
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((i) => (
          <div
            key={i.id}
            className="h-[400px] bg-white overflow-hidden rounded-xl relative shadow-xl shadow-primary/30 cursor-pointer portfolio-item"
          >
            <div className="absolute bg-primary/40 backdrop-blur-lg z-10 inset-6 flex items-center justify-center portfolio-item__name rounded-xl">
              <div>
                <span className=" text-white font-bold text-2xl font-serif capitalize">
                  {i.name}
                </span>
              </div>
            </div>
            <Image
              layout="fill"
              src={unsplash({ id: i.id, size: i.size })}
              alt="hero image"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={unsplash({ id: i.id, size: i.size })}
            />
          </div>
        ))}
      </div>
      <div className=" flex justify-center mt-16">
        <Button onClick={() => {}}>Check all projects</Button>
      </div>
    </div>
  );
}
