"use client";

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects } from "@/lib/content";
import { LocaleContext } from "../locale-provider";

// const projects = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "project 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi eos, atque labore consequatur eligendi sapiente expedita!",
//     stack: [
//       {
//         name: "Html 5",
//       },
//       {
//         name: "Css 3",
//       },
//       {
//         name: "Javascript",
//       },
//     ],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "fullstack",
//     title: "project 2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi eos, atque labore consequatur eligendi sapiente expedita!",
//     stack: [
//       {
//         name: "Next.js",
//       },
//       {
//         name: "Tailwind.css",
//       },
//       {
//         name: "Node.js",
//       },
//     ],
//     image: "/assets/work/thumb2.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "frontend",
//     title: "project 3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi eos, atque labore consequatur eligendi sapiente expedita!",
//     stack: [
//       {
//         name: "Next.js",
//       },
//       {
//         name: "Tailwind.css",
//       },
//     ],
//     image: "/assets/work/thumb3.png",
//     live: "",
//     github: "",
//   },
// ];

const Work = () => {
  const { locale } = useContext(LocaleContext);
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state  based on current  slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-3 xl:gap-[10px] h-full">
              {/* outline num */}
              <div className="text-2xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-3xl md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title[locale]}
              </h2>
              <span className="text-xl md:text-[1.5rem] capitalize">
                {project.category} project
              </span>

              {/* project description */}
              <p className="text-xs md:text-base">
                {project.description[locale]}
              </p>

              {/* stack */}
              <ul className="flex gap-1 flex-wrap md:gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm md:text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20 "></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3x group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                          sizes="100%"
                          unoptimized
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-bover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
