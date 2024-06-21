import Image from "next/image";
import React from "react";
import HeroProduct from "@public/assets/hero.svg";
import "@/app/globals.css";


function Hero() {
  return (
    <>
      <section className="hero-bg bg-cover bg-no-repeat bg-center overflow-hidden relative  h-[90vh]  flex items-center">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 items-center ">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-16  items-center ">
            <div className="relative h-64 overflow-hidden sm:h-96  lg:order-last lg:h-screen items-center flex">
              <Image
                src={HeroProduct}
                alt="Hero-Image"
                className=" inset-0  my-auto "
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-5xl">
              We Are Committed To Your Skin
              </h2>

              <p className="mt-4 text-gray-600">
              It is a established fact that a reader will be distracted by the content of a page when looking at this layout.
              It is a established fact that a reader will be distracted by the content of a page when looking at this layout.
              </p>

              <a
                className=" mt-8 inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="/download"
              >
                <span className="text-sm font-medium"> Meet A Doctor</span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
