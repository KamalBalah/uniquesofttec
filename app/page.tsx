"use client";

import WhayUs from "@/components/WhayUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// import OurProjects from "@/components/OurProjects";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { IData } from "@/interfaces";
import Spinner from "@/components/Spinner";

export default function Home() {
	const [data, setData] = useState<IData>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("/api/data")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading || !data) {
		return (
			<div className="flex items-center bg-white h-dvh w-full text-secondary fixed">
				<Spinner />
			</div>
		);
	}

	return (
		<div>
			<main className="border-[0.5rem] border-main m-0 text-black scroll-smooth *:px-3 *:shadow-custom">
				<Hero />
				<Services
					description={data?.services.description}
					services={data?.services.list}
				/>
				<WhayUs
					description={data.whyUs.description}
					whyUsList={data.whyUs.list}
				/>
				{/* <OurProjects
          description={data.projects.description}
          projects={data.projects.list}
        /> */}
				<Footer connectList={data.connects.list} />
			</main>
		</div>
	);
}
