"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation"; // Use the navigation from your i18n config
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";

    // This updates the URL but keeps the same page path
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className=" flex items-center gap-2 cursor-pointer text-secondary font-medium p-1 hover:bg-secondary/20 rounded-md duration-300"
    >
      <span>{locale === "en" ? "ع" : "EN"}</span>
      <span className="text-main">
        <Globe size={20} />
      </span>
    </button>
  );
};

export default LanguageSwitcher;
