import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fixed z-2 top-2 left-1/2 -translate-x-1/2">
      <nav className="flex justify-between items-center relative z-2 font-cairo border border-gray-200/70 bg-background/80 px-4 py-1 rounded-md shadow-md backdrop-blur-sm">
        <div className="text-lg font-black">
          <Link href="/">
            <Image
              src="/unique_soft.svg"
              width={100}
              height={49}
              alt="Unique Soft Logo"
            />
          </Link>
        </div>
        <Menu />
      </nav>
    </div>
  );
};

export default Nav;
