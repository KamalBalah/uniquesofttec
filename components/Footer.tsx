import { IConnectsList } from "@/interfaces";
import Logo from "./Logo";
import Image from "next/image";

interface IProps {
	connectList: IConnectsList[];
}

const Footer = ({ connectList }: IProps) => {
	return (
		<footer
			id="connect"
			className="bg-white min-h-[100dvh] flex items-center justify-center"
		>
			<div className="h-full flex flex-col justify-center overflow-y-auto">
				<div className="flex flex-col items-center gap-3">
					<Logo />
					<p className="text-slate mt-5 text-center">
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
							className="flex items-center gap-2 text-slate mt-5"
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
