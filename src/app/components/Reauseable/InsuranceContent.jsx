import Image from 'next/image'
import React from 'react'

const InsuranceContent = ({title,src,desc}) => {
  return (
    <div className="flex flex-col items-center justify-center ">
    <div className="w-[340px]  ">
      <Image
      alt={title}
        src={src}
        className="object-contain w-full "
      />
    </div>
    <h3 className="mb-[15px] text-[20px] md:text-[25px] lg:text-3xl text-lightGray text-center font-bold line-clamp-2">
     {title}
    </h3>
   
    <p className="leading-5 [&:not(:first-child)]:mt-4 text-base line-clamp-5 mb-5">
     {
        desc
     }
    </p>
 


    <div className="flex-wrap lg:flex-nowrap flex gap-[10px] lg:gap-0">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-[40px] ">
          <img src="/assets/guarante.png" alt="" />
        </div>
        <p className="text-center text-[12px]">We guarantee the best rates</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-[40px] ">
          <img src="/assets/save-money.png" alt="" />
        </div>
        <p className="text-center text-[12px]">
          Provide our services free of cost{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-[40px] ">
          <img src="/assets/claim.png" alt="" />
        </div>
        <p className="text-center text-[12px]">
          Our team is here to assist you with any claims.
        </p>
      </div>
    </div>
  </div>
  )
}

export default InsuranceContent