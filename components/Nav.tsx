import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fixed z-2 top-2 left-1/2 -translate-x-1/2">
      <nav className="flex justify-between items-center relative z-2 font-cairo border border-gray-200/70 bg-white/80 px-4 py-1 rounded-md shadow-md backdrop-blur-sm">
        <h1 className="text-lg font-black text-orange-300">
          <Link href="/">
            <Image
              src="/unique_soft.svg"
              width={100}
              height={49}
              alt="Unique Soft Logo"
            />
          </Link>
        </h1>
        <Menu />
      </nav>
    </div>
  );
};

export default Nav;
