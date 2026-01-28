"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  function handleLocaleChange(newLocale: "fr" | "en") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-2 ml-4">
      <button
        onClick={() => handleLocaleChange("fr")}
        className={`text-xs font-semibold uppercase transition-colors ${
          currentLocale === "fr"
            ? "text-n-1"
            : "text-n-1/50 hover:text-n-1"
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-n-1/30">|</span>
      <button
        onClick={() => handleLocaleChange("en")}
        className={`text-xs font-semibold uppercase transition-colors ${
          currentLocale === "en"
            ? "text-n-1"
            : "text-n-1/50 hover:text-n-1"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
