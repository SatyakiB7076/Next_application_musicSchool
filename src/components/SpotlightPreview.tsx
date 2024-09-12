'use client'
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Highlight } from "./ui/hero-highlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { WavyBackground } from "./ui/wavy-background";

export function SpotlightPreview() {
    return (
      <div className="h-[45rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased  relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="mt-[90px] text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Master the art of Music <br /> join the new trend.
          </h1>
          <p className="mt-[70px] mb-8 font-semibold text-lg text-neutral-200 max-w-lg text-center mx-auto ">
           Dive into the comprehensive music courses today and transform your musical journey.<br />
            <Highlight className="text-xl mt-[90px]">
           Courses like never before!
           </Highlight>
          </p>
          <div className="max-w-max p-1 text-center mx-auto mt-[90px]">
        <Link href={"/courses"} >
            <Button>
            Explore Courses    
            </Button> 
        </Link>
          </div>
        </div>
        <WavyBackground></WavyBackground>
      </div>
    );
  }