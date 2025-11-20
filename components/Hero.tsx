import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="py-10">
      <div className="bg-secondary rounded-xl min-h-[400px] flex flex-col md:flex-row justify-around items-center gap-10 px-10 relative overflow-hidden">
        <div className="flex-1 text-center md:text-right pt-6">
          <h1 className="text-7xl font-suisseIntl font-black text-white">
            كن فريداً
          </h1>
          <p className="text-lg font-bold font-suisseIntl mt-3 text-main">
            في يونيك سوفت نصنع لك شيئًا فريدًا، نولي كل تفصيلة عناية ودقة،
            لنقدّم لك منتجًا متفردًا يبرز بين الجميع.{" "}
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

        <div className="absolute top-0 bottom-0 hidden md:block left-[8%] z-0 bg-waterfall"></div>
        <div className="absolute top-[90%] right-0 left-0 md:hidden z-0 bg-waterfall-horz"></div>
      </div>
    </div>
  );
};

export default Hero;
