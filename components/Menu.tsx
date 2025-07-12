"use client";
import { useState } from "react";

interface IMenuItems {
  title: string;
  id: string;
}

const menuItems: IMenuItems[] = [
  {
    title: "الرئيسية",
    id: "#home",
  },
  {
    title: "خدماتنا",
    id: "#services",
  },
  {
    title: "لماذا نحن",
    id: "#why-us",
  },
  {
    title: "عملاءنا",
    id: "#our-projects",
  },
  {
    title: "تواصل معنا",
    id: "#connect",
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
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
      <ul className="hidden md:flex justify-between w-1/2 text-base *:cursor-pointer *:hover:text-secondary *:duration-300">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.id}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 p-3 bg-white transition-all duration-300 ease-in-out
    ${
      isOpen
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }
  `}
      >
        <span className="absolute left-1" onClick={toggleMenu}>
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
        <ul className="text-base *:mb-2 *:mr-2 *:cursor-pointer *:hover:text-secondary *:duration-300">
          {menuItems.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <a href={item.id}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
