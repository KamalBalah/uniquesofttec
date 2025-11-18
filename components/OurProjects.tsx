import { IProjectsList } from "@/interfaces";
import Image from "next/image";
interface IProps {
  description: string;
  projects: IProjectsList[];
}

const OurProjects = ({ description, projects }: IProps) => {
  return (
    <div id="our-projects" className="bg-slate">
      <div className="h-full overflow-y-auto scrollbar-hide pb-24">
        <h2 className="text-3xl text-green text-center font-bold">أعمالنا</h2>
        <p className="text-sm font-semibold text-white text-center mt-4">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-5">
          {projects.map((project, index) => (
            <a key={index} href={project.url}>
              <div className="group bg-[#2b374a] shadow-sm p-4 rounded-md cursor-pointer">
                <div className="relative w-full min-h-40">
                  <Image
                    className="rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
                    src={project.image}
                    fill
                    alt="Project Image"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-md text-green font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm/6 text-white mt-2">{project.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
