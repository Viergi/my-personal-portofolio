"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

//@components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useContext, useEffect, useState } from "react";
import { LocaleContext } from "./locale-provider";
import { home } from "@/lib/content";

const Home = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              {home[locale].title}
              <br /> <span className="text-accent">Viergi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {home[locale].description}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/CV_VIERGI_indonesia.pdf"
                download={"CV_VIERGI_indonesia.pdf"}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>{home[locale].cv}</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                ></Social>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
      <Stats></Stats>
    </section>
  );
};

export default Home;
