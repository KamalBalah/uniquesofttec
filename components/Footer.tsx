import { IConnectsList } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  connectList: IConnectsList[];
}

const Footer = ({ connectList }: IProps) => {
  return (
    <footer
      id="connect"
      className="bg-secondary mt-15 mb-7 p-5 py-10 rounded-lg text-main flex items-center justify-center"
    >
      <div className="h-full flex flex-col justify-center overflow-y-auto">
        <div className="flex flex-col items-center gap-3">
          <Link href="/">
            <Image
              src="/images/Unique-Soft-for-orange-back.svg"
              width={100}
              height={100}
              alt="Unique Soft Logo"
            />
          </Link>
          <p className="text-white mt-5 text-center">
            يونيك سوفت هي شركة تقنية متخصصة في تطوير البرمجيات وحلول الأعمال
            الذكية
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          {connectList.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              className="flex items-center text-main gap-2 mt-5"
            >
              <Image
                src={`/${item.icon}`}
                width={25}
                height={25}
                alt={item.title}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
