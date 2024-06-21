import Image from "next/image";
import React from "react";
import Conceptual from "@public/assets/side-image/conceptual.svg";
import "@/app/globals.css";

function ConceptualSec() {
  return (
    <>
      <div className="bg-conceptual">
        <div className="mx-auto max-w-3xl text-center mt-5 ">
          <h2 className="text-3xl  text-neutral-500 font-extrabold sm:text-4xl font-sans">
            The Core of
            <span className="text-blue-500"> Oneclick Digital</span>
          </h2>

          <p className="mt-4 text-gray-600 sm:text-md">
            OneClickDigital is founded on the principles of solidarity and
            shared responsibility. In times of need, participants come together
            to support one another, pooling their resources to mitigate risks
            and unforeseen events. Recognizing the inevitability of such
            challenges, OneClickDigital provides a Shariah-compliant solution,
            ensuring financial security and peace of mind for all.
          </p>
          <Image src={Conceptual} className="" alt="conceptual_Image"/>
        </div>
      </div>
    </>
  );
}

export default ConceptualSec;
