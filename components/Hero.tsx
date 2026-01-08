import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <div id="home" className="py-10">
      <div className="bg-secondary rounded-xl min-h-[400px] flex flex-col md:flex-row justify-around items-center gap-10 px-10 relative overflow-hidden">
        <div className="flex-1 text-center md:text-start pt-6">
          <h1 className="text-7xl font-suisseIntl font-black text-white">
            {t("title")}
          </h1>
          <p className="text-lg font-bold font-suisseIntl mt-3 text-main light:text-background">
            {t("description")}
          </p>
        </div>
        <div className="flex-1 z-1">
          <Image
            src="/images/hero-image.png"
            width={450}
            height={450}
            className="w-80 md:w-auto"
            alt="صورة توضيحية لخدمات يونيك سوفت"
            priority
          />
        </div>

        <div className="absolute top-0 bottom-0 hidden md:block end-[8%] z-0 bg-waterfall"></div>
        <div className="absolute top-[90%] start-0 end-0 md:hidden z-0 bg-waterfall-horz"></div>
      </div>
    </div>
  );
};

export default Hero;
