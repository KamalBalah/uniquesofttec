import { IServicesList } from "@/interfaces";
import Image from "next/image";

interface IProps {
  description: string;
  services: IServicesList[];
}

const Services = ({ description, services }: IProps) => {
  return (
    <div id="services" className="bg-slate text-white">
      <div className="h-full overflow-y-auto scrollbar-hide pb-22">
        <h2 className="text-3xl text-green text-center font-bold">خدماتنا</h2>
        <p className="text-base text-center my-2">{description}</p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center transition-colors duration-300 rounded-lg p-6 shadow-lg"
            >
              <div className="text-5xl mb-4 flex justify-center">
                <Image
                  src={`/${service.icon}`}
                  width={32}
                  height={32}
                  alt={service.title}
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
