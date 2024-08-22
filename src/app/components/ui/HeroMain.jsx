"use client";
import React from "react";
import Slider from "./Slider";
import Auto from "@public/assets/Hero/auto.svg";
import Travel from "@public/assets/Hero/travel.svg";
import Health from "@public/assets/Hero/health.svg";
import Family from "@public/assets/Hero/family.svg";
import Home from "@public/assets/Hero/home.svg";
import Tracker from "@public/assets/Hero/tracker.svg";
import Bike from "@public/assets/Hero/bike.svg";
import Life from "@public/assets/Hero/life.svg";
import "@/app/globals.css";
import Link from "next/link";
import IconCard from "../Reauseable/IconCard";
const HeroMain = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-10 hero-main">
        {/* Carousel */}
        <div className="m-auto">
          <Slider />
        </div>
        {/* Card Part */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div>
            <h1 className="text-2xl text-neutral-500 font-extrabold mt-3 font-sans">
              Hassle-Free Insurance Solutions at: <br />{" "}
              <span className="text-blue-500 text-5xl">Oneclick Digital </span>
            </h1>
            <p className="mt-1 text-gray-600 font-sans font-semibold">
              Your Premier Online & Offline Insurance Marketplace in Pakistan.
            </p>
            <div className="block">
              {/* 4 cards  */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-5">
                {/* Tracker  */}
                <IconCard src={Tracker} alt="tracker_icon" title="Tracker" />
                {/* Auto */}
                <Link href={"/insurance/auto"}><IconCard src={Auto} alt="auto_icon" title="Auto" /></Link>
                {/* Bike  */}
               <Link href={"/insurance/bike"}><IconCard src={Bike} alt="bike_icon" title="Bike" /></Link> 
                {/* Health */}
                <IconCard src={Health} alt="health_icon" title="Health" />
              </div>

              {/* 4 Cards  */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-5">
                {/* Family */}
                <IconCard src={Family} alt="family_icon" title="Family" />
                {/* Travel */}
                <IconCard src={Travel} alt="travel_icon" title="Travel" />
                {/* Life  */}
                <IconCard src={Life} alt="life_icon" title="Life" />
                {/* Home  */}
                <IconCard src={Home} alt="home_icon" title="General" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroMain;
