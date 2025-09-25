import { ISectionList } from "@/interfaces";
import Image from "next/image";

interface IProps {
	description: string;
	whyUsList: ISectionList[];
}

const WhyUs = ({ description, whyUsList }: IProps) => {
	return (
		<div id="why-us" className="bg-white w-full shadow-lg pt-10">
			<div className="h-full overflow-y-auto scrollbar-hide pb-20">
				<h2 className="text-3xl text-secondary text-center font-bold">
					لماذا نحن؟
				</h2>
				<p className="text-sm/7 font-semibold text-slate text-center mt-4">
					{description}
				</p>
				<div className="flex flex-wrap mt-7 *:basis-3xs *:grow gap-4">
					{whyUsList.map((item, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center p-4 border-1 border-gray-100 rounded-lg shadow-sm"
						>
							<div className="text-5xl mb-4 flex justify-center">
								<Image
									src={`/${item.icon}`}
									width={32}
									height={32}
									alt={item.title}
								/>
							</div>
							<h3 className="text-lg font-bold text-secondary mt-4">
								{item.title}
							</h3>
							<p className="text-base text-slate text-center">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
