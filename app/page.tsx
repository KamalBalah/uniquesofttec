import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import { IData } from "@/interfaces";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/data`, {
    cache: "no-store",
  });
  const data: IData = await res.json();
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="relative pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-2">
          <Hero />
          <Services
            description={data.services.description}
            services={data.services.list}
          />
          <ContactForm />
          <Footer connectList={data.connects.list} />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] pointer-events-none -z-1"
        ></div>
      </main>
    </div>
  );
}
