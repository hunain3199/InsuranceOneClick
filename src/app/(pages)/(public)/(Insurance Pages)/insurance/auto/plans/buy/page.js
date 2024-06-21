import React from "react";
import Details from "../../../../../../../components/autoplans/Buy/Details";
import BuyForm from "../../../../../../../components/autoplans/Buy/BuyForm";

const Buy = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-customBlue ">
      <Details />
      <BuyForm />
    </div>
  );
};

export default Buy;