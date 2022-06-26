import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <div className="w-full px-5 pt-5 pb-20 sm:pb-5 mt-32 text-center text-gray-400 text-sm flex flex-col gap-y-6 items-center">
      <ul className="flex gap-x-3 md:gap-x-6 text-secondary">
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <ul className="flex gap-x-4 text-xl text-secondary">
        <li>
          <BsFacebook></BsFacebook>
        </li>
        <li>
          <BsTwitter></BsTwitter>
        </li>
        <li>
          <BsInstagram></BsInstagram>
        </li>
      </ul>
      <p>Alicia. {new Date().getFullYear()}</p>
    </div>
  );
}
