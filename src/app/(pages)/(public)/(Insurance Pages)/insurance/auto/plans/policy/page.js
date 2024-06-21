import React from "react";
// import Tabs from "../../../../../../components/policy/Tabs/Tabs";
// import Tabs from "../../../../../../../components/policy/Tabs/Tabs";
// import AutoDetails from "../../../../../../../components/policy/AutoDetails";
import Tab from "@/app/components/policy/Tabs/Tabs";
import AutoDetails from "@/app/components/policy/AutoDetails";

const page = () => {
  return (
    <div>
      <AutoDetails />
      <Tab />
    </div>
  );
};

export default page;