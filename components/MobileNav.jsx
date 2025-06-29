"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useContext } from "react";
import { LocaleContext } from "@/app/locale-provider";

const links = [
  { path: "/", name: { id: "Beranda", en: "Home" } },
  { path: "/services", name: { id: "Layanan", en: "services" } },
  { path: "/resume", name: { id: "Resume", en: "resume" } },
  { path: "/work", name: { id: "proyek", en: "project" } },
  { path: "/contact", name: { id: "kontak", en: "contact" } },
];

const MobileNav = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const pathname = usePathname();
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={toggleLocale}
        className="group p-1 flex items-center justify-center"
      >
        <svg
          fill="#ffffff"
          className="group-hover:fill-accent"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16zm6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47-.31-.35-.6-.72-.86-1.1l-.79-2.37zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5-1.04-3.1 3.1 3.1.92-.92-3.3-3.25.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1v14z"></path>
          <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z"></path>
        </svg>
      </button>
      <Sheet>
        <SheetTitle className="hidden"></SheetTitle>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-20 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Viergi <span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    link.path == pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name[locale]}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
