import {
  SiIkea,
  SiAirbnb,
  SiHomeassistant,
  SiHomeadvisor,
  SiHomebridge,
  SiFedex,
} from "react-icons/si";

export function Brands() {
  return (
    <div className="px-4">
      <div className="container flex justify-center items-center gap-x-8 lg:gap-x-16">
        <SiIkea size={72} className="text-primary/40" />
        <SiAirbnb size={48} className="text-primary/40" />
        <SiHomeassistant size={48} className="text-primary/40" />
        <SiHomeadvisor size={56} className="text-primary/40" />
        <SiHomebridge size={48} className="text-primary/40" />
        <SiFedex size={72} className="text-primary/40" />
      </div>
    </div>
  );
}
