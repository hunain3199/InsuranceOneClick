import Image from "next/image";
import React from "react";
import AboutImage from "@public/assets/side-image/about.svg";
import InsurancePlan from "@/app/components/ui/InsurancePlan";
import '@/app/globals.css'

function page() {

  
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-12 about-bg">
        <div className="">
          <Image src={AboutImage} alt="about_main_image" />
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start ">
          <p className="text-black text-2xl font-semibold font-sans">
            Let&apos;s find the
          </p>
          <h1 className="text-3xl text-neutral-500 font-extrabold mt-3 sm:text-4xl font-sans">
            Best <span className="text-blue-500">OneClickDigital Plan</span>
          </h1>
          <p className="mt-1 text-gray-600 font-sans font-semibold sm:text-md text-md">
            Pakistan&apos;s only Digital OneClickDigital Solution for All
          </p>
        </div>
      </div>

      {/* Stats  */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl  text-neutral-500 font-extrabold sm:text-4xl font-sans">
              Pakistan&apos;s Leading Insurance/Takaful
              <span className="text-blue-500"> Aggregator in Pakistan</span>
            </h2>

            <p className="mt-4 text-gray-600 sm:text-xl">
              As Pakistan&apos;s leading insurance and takaful aggregator, we take
              pride in simplifying your insurance choices and making them more
              accessible than ever. We understand the importance of finding the
              right insurance or takaful plan to protect yourself, your loved
              ones, and your assets. Our platform empowers you to compare and
              select from a wide range of insurance and takaful products,
              ensuring you can make informed decisions that suit your unique
              needs.With us, you get sufficiently close to an abundance of
              choices and the comfort of one-stop protection and takaful
              shopping, making getting your future simpler and more proficient
              than any other time in recent memory.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Insurance Policies
                </dt>

                <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                  5.5K+
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Happy Clients
                </dt>

                <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                  4K+
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Range of Products
                </dt>

                <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                  50K+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Insurance Cards */}
      <InsurancePlan />
    </>
  );
}

export default page;
