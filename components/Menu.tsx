"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

interface IMenuItems {
  title: string;
  id: string;
}

const menuItems: IMenuItems[] = [
  {
    title: "home",
    id: "#home",
  },
  {
    title: "services",
    id: "#services",
  },
  // {
  //   title: "لماذا نحن",
  //   id: "#why-us",
  // },
  // {
  //   title: "عملاءنا",
  //   id: "#our-projects",
  // },
  {
    title: "contact",
    id: "#contact",
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const t = useTranslations("header");

  return (
    <div className="flex items-center justify-end gap-6 w-[80%]">
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between w-1/2 text-lg font-semibold text-main *:cursor-pointer *:hover:text-secondary *:duration-300">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.id}>{t(item.title)}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed z-2 h-[95dvh] w-[80%] top-1.5 -end-150 p-3 bg-white rounded-lg transition-all duration-300 ease-in-out
    ${isOpen ? "-end-[2%]!" : "-end-150 pointer-events-none"}
  `}
      >
        <span className="absolute end-1" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="var(--secondary-color)"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        <ul className="text-lg font-semibold text-main *:mb-2 *:mr-2 *:cursor-pointer *:hover:text-secondary *:duration-300">
          {menuItems.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <a href={item.id}>{t(item.title)}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`md:hidden bg-black/20 w-[120%] h-[110dvh] fixed -top-4 -left-220 ${
          isOpen ? "-left-7!" : "-left-220 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Menu;
