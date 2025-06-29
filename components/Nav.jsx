"use client";

import { LocaleContext } from "@/app/locale-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const links = [
  { path: "/", name: { id: "Beranda", en: "Home" } },
  { path: "/services", name: { id: "Layanan", en: "services" } },
  { path: "/resume", name: { id: "Resume", en: "resume" } },
  { path: "/work", name: { id: "Proyek", en: "Project" } },
];

const Nav = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const pathname = usePathname();
  return (
    <div className="hidden xl:flex items-center gap-8">
      <nav className="flex gap-8">
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
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                pathname == link.path && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all `}
            >
              {link.name[locale]}
            </Link>
          );
        })}
      </nav>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover h-[44px] px-6"
      >
        {locale == "en" ? "Contact" : "Kontak"}
      </Link>
    </div>
  );
};

export default Nav;
