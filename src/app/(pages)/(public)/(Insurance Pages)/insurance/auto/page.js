import React from "react";
// import Form from "@/app/components/insurance/Bike/Form";
import {AutoForm} from "@/app/components/insurance/Auto/form2";
import Content from "@/app/components/insurance/Auto/Content";

const Page = () => {
  return (
    <>
      <div className="w-full  px-[50px] grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 py-[50px] gap-[30px] lg:gap-[30px] ">
        <div className="">
          <Content />
        </div>
        <div className="">
        <AutoForm />
        </div>
        
      </div>
    </>
  );
};

export default Page;
