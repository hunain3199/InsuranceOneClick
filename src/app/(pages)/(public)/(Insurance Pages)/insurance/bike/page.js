import React from "react";
import Form from "@/app/components/insurance/Bike/Form";
import Content from "@/app/components/insurance/Bike/Content";

const Page = () => {
  return (
    <>
      <div className=" px-[50px] grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 py-[50px] gap-[30px] lg:gap-[30px]  ">
        <div className="lg:col-span-2">
          <Content />
        </div>
        <Form />
      </div>
    </>
  );
};

export default Page;
