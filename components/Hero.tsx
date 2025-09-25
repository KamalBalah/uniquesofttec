import { AnimatedBackground } from "./AnimatedBackground";
import Nav from "./Nav";

const Hero = () => {
	return (
		<div id="home" className="bg-white w-full min-h-[100dvh] text-lg">
			<Nav />
			<div className="mt-[35dvh] text-center relative z-2">
				<h1 className="text-5xl font-black text-main text-center mt-10">
					كن <span className="text-secondary">فريدا</span>
				</h1>
				<p className="text-lg mt-3 text-slate">
					في يونيك سوفت، نبتكر حلولا برمجية مخصصة تساعدك على تطوير أعمالك، من
					المواقع الإلكترونية إلى تطبيقات الجوال وأنظمة الأعمال المتكاملة،
					باستخدام أحدث التقنيات وأفضل الممارسات.
				</p>
			</div>

			<AnimatedBackground />
		</div>
	);
};

export default Hero;
