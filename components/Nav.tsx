import Image from "next/image";
import Menu from "./Menu";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center relative z-2">
      <h1 className="text-lg font-black text-orange-300">
        <Image
          src="/unique_soft.svg"
          width={100}
          height={100}
          alt="Unique Soft Logo"
        />
      </h1>
      <Menu />
    </nav>
  );
};

export default Nav;
