import React from "react";
import Claim from "@public/assets/Cards/claim.svg";
import Docs from "@public/assets/Cards/docs.svg";
import Emergency from "@public/assets/Cards/emergency.svg";
import Transparency from "@public/assets/Cards/transparency.svg";
import Simple from "@public/assets/Cards/simple.svg";
import Compotetive from "@public/assets/Cards/competetive.svg";
import ClaimCard from "../Reauseable/Cards";

const Cards = () => {
  return (
    <>
      {/* <h1 className="text-center text-blue-500 font-sans font-extrabold text-3xl mt-4"> */}
      <h1 className="text-3xl  text-center text-blue-500  font-extrabold sm:text-4xl font-sans">
        <span className="text-neutral-500">Why</span> Oneclick Digital?
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-12">
        <ClaimCard
          imageSrc={Claim}
          title="Claims Assistance"
          description="Excels in simplifying and expediting insurance claims through a user-friendly digital platform, providing efficient and hassle-free claim assistance services."
        />

        <ClaimCard
          imageSrc={Docs}
          title="Minimal Documentation"
          description="Simplifying insurance with minimal documentation reduces paperwork for an efficient and streamlined customer experience."
        />

        <ClaimCard
          imageSrc={Emergency}
          title="24/7 Emergency Help"
          description="24/7 emergency assistance through a reliable digital platform, ensuring prompt support for customers in critical situations and enhancing peace of mind during unforeseen events."
        />
      </div>

      {/* 2  */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  p-12">
        <ClaimCard
          imageSrc={Transparency}
          title="Transparent Work"
          description="Prioritizes transparency in its operations, fostering clarity and honesty in all interactions through its digital platform."
        />

        <ClaimCard
          imageSrc={Simple}
          title="Simple and Easy To Use"
          description="Simple and easy-to-use platform for a seamless insurance experience."
        />

        <ClaimCard
          imageSrc={Compotetive}
          title="Reasonable Rates"
          description="Affordable rates without compromising quality coverage."
        />
      </div>
    </>
  );
};

export default Cards;
