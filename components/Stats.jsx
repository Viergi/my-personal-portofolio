"use client";

import { LocaleContext } from "@/app/locale-provider";
import { useContext } from "react";
import CountUp, { useCountUp } from "react-countup";

const stats = [
  { num: 1, text: { id: "Tahun pengalaman", en: "Years of experience" } },
  { num: 6, text: { id: "Proyek selesai", en: "Project completed" } },
  {
    num: 12,
    text: { id: "Teknologi yang dikuasai", en: "Technologies Mastered" },
  },
  // { num: 40, text: { id: "Code Commits", en: "Code Commits" } },
];

const Stats = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-xs lg:text-base`}
                >
                  {item.text[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
