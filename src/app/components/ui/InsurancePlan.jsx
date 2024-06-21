import React from "react";
import ClaimCard from "../Reauseable/Cards";
import Claimicon from "@public/assets/Cards/claimicon.svg";
import FreeCost from "@public/assets/Cards/freecost.svg";
import BestRates from "@public/assets/Cards/bestrates.svg";

function InsurancePlan() {
  return (
    <>
     <h1 className="text-center text-blue-500 font-sans font-extrabold text-3xl mt-4">
      <span className="text-neutral-500">Three Step To Buying </span>The Right Insurance Plan
      </h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-12">
        <ClaimCard
          imageSrc={Claimicon}
          title="Claim assistance"
          description="Your policy claim is on us. Just let us know!"
        />

        <ClaimCard
          imageSrc={BestRates}
          title="Best rates"
          description="We ensure best rates among competitors."
        />
        <ClaimCard
          imageSrc={FreeCost}
          title="Free of cost service"
          description="We don't charge for any service & assistance"
        />
      </div>
    </>
  );
}

export default InsurancePlan;
